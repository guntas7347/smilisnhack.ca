type Post = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type?: string;
};

const getGallery = async () => {
  const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${INSTAGRAM_TOKEN}`;
    const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } }); // revalidate every day
    const json = await res.json();

    const filtered = (json.data || []).filter(
      (p: Post) =>
        (p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") &&
        p.media_url,
    );

    return filtered;
  } catch (error) {
    console.log(error);
  }
};

export default getGallery;
