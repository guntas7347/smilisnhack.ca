type Post = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type?: string;
};

const getGallery = async (pages: number = 0) => {
  const token = process.env.INSTAGRAM_TOKEN;

  try {
    let all: Post[] = [];
    let nextUrl: string | null =
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&access_token=${token}&limit=100`;

    let fetchedPages = 0;

    while (nextUrl) {
      if (pages !== 0 && fetchedPages >= pages) break;

      const res: any = await fetch(nextUrl, {
        next: { revalidate: 60 * 60 * 24 },
      });
      const json: any = await res.json();

      if (json.data?.length) {
        all.push(...json.data);
      }

      nextUrl = json.paging?.next || null;
      fetchedPages++;
    }

    const filtered = all.filter(
      (p: Post) =>
        (p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") &&
        p.media_url,
    );

    return filtered;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getGallery;
