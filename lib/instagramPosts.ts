import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

type Post = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type?: string;
};

type RefreshResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type TokenData = {
  access_token: string;
  updated_at: number;
};

export async function getToken(): Promise<TokenData> {
  const snap = await getDoc(doc(db, "config", "instagram"));

  if (!snap.exists()) {
    throw new Error("Instagram token not found");
  }
  const data = snap.data();

  return {
    access_token: data.access_token,
    updated_at: data.updated_at,
  };
}

export async function saveToken(token: string) {
  await setDoc(doc(db, "config", "instagram"), {
    access_token: token,
    updated_at: Date.now(),
  });
}

/**
 * Constants
 */
const TOKEN_TTL = 60 * 24 * 60 * 60 * 1000; // 60 days
const BUFFER = 30 * 24 * 60 * 60 * 1000; // 30 days

/**
 * Expiry check using updated_at
 */
export async function isExpiringSoon(): Promise<boolean> {
  const { updated_at } = await getToken();

  const now = Date.now();
  const expiresAt = updated_at + TOKEN_TTL;

  return expiresAt - now < BUFFER;
}

/**
 * Detect expired token from API error
 */
function isTokenExpired(error: any) {
  try {
    const parsed = JSON.parse(error.message);
    return parsed?.code === 190;
  } catch {
    return false;
  }
}

/**
 * Refresh token
 */
export async function refreshInstagramToken(): Promise<string> {
  const { access_token } = await getToken();

  const url =
    `https://graph.instagram.com/refresh_access_token` +
    `?grant_type=ig_refresh_token` +
    `&access_token=${access_token}`;

  const res = await fetch(url, { cache: "no-store" });
  const json: RefreshResponse | any = await res.json();

  if (!res.ok || json.error) {
    throw new Error(
      `Token refresh failed: ${JSON.stringify(json.error || json)}`,
    );
  }

  await saveToken(json.access_token);

  return json.access_token;
}

/**
 * Internal fetch
 */
async function fetchGallery(pages: number = 0): Promise<Post[]> {
  const { access_token } = await getToken();

  let all: Post[] = [];
  let nextUrl: string | null =
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&access_token=${access_token}&limit=100`;

  let fetchedPages = 0;

  while (nextUrl) {
    if (pages !== 0 && fetchedPages >= pages) break;

    const res: any = await fetch(nextUrl, {
      cache: "no-store",
    });

    const json: any = await res.json();

    if (!res.ok || json.error) {
      throw new Error(JSON.stringify(json.error));
    }

    if (json.data?.length) {
      all.push(...json.data);
    }

    nextUrl = json.paging?.next || null;
    fetchedPages++;
  }

  return all.filter(
    (p) =>
      (p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") &&
      p.media_url,
  );
}

/**
 * Public API
 */
export const getGallery = async (pages: number = 0) => {
  try {
    // proactive refresh
    if (await isExpiringSoon()) await refreshInstagramToken();

    return await fetchGallery(pages);
  } catch (err: any) {
    // fallback recovery
    if (isTokenExpired(err)) {
      await refreshInstagramToken();
      return await fetchGallery(pages);
    }

    return [];
  }
};
