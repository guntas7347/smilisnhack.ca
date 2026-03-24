"use server";

import { getToken, saveToken } from "./firebase/firebaseAdmin";

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

/**
 * Refresh token (server only)
 */
function isTokenExpired(error: any) {
  try {
    const parsed = JSON.parse(error.message);
    return parsed?.code === 190;
  } catch {
    return false;
  }
}

export async function refreshInstagramToken(): Promise<string> {
  const currentToken = await getToken();

  const url =
    `https://graph.instagram.com/refresh_access_token` +
    `?grant_type=ig_refresh_token` +
    `&access_token=${currentToken}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json: RefreshResponse | any = await res.json();

  if (!res.ok || json.error) {
    throw new Error(
      `Token refresh failed: ${JSON.stringify(json.error || json)}`,
    );
  }

  await saveToken(json.access_token, json.expires_in);

  return json.access_token;
}

/**
 * Internal fetch (single attempt)
 */
async function fetchGallery(pages: number = 0): Promise<Post[]> {
  const token = await getToken();

  let all: Post[] = [];
  let nextUrl: string | null =
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&access_token=${token}&limit=100`;

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
 * Public function with auto-recovery
 */
export const getGallery = async (pages: number = 0) => {
  try {
    return await fetchGallery(pages);
  } catch (err: any) {
    if (isTokenExpired(err)) {
      await refreshInstagramToken();
      return await fetchGallery(pages);
    }
    return [];
  }
};
