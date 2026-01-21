const getGoogleReviews = async () => {
  try {
    const dataId = "0x882b153f64313d17:0xb7e528b653118eae"; // smilinshack
    const apiKey = process.env.SERPAPI_KEY;

    const res = await fetch(
      `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&hl=en&api_key=${apiKey}`,
      { next: { revalidate: 60 * 60 * 24 * 7 } },
    );

    const json = await res.json();
    return normalizeGoogleReviews(json.reviews);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getGoogleReviews;

const normalizeGoogleReviews = (reviews: any, limit = 5) => {
  if (!Array.isArray(reviews)) return [];

  const sorted = [...reviews].sort((a, b) => {
    const ta = a?.iso_date ? Date.parse(a.iso_date) : 0;
    const tb = b?.iso_date ? Date.parse(b.iso_date) : 0;
    return tb - ta; // latest first
  });

  return sorted.slice(0, limit).map((r) => ({
    authorName: r.user?.name || "Anonymous",
    source: "google",
    score: typeof r.rating === "number" ? r.rating : 0,
    authorAvatarUrl: r.user?.thumbnail || null,
    content: r.snippet || "",
    mediaUrl:
      Array.isArray(r.images) && r.images.length > 0 ? r.images[0] : null,
    authorInitials: null,
    publishedAt: r.iso_date || null,
    sourceUrl: r.link || null,
  }));
};
