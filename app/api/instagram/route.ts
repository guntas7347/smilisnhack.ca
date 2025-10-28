import { NextResponse } from "next/server";

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;

export async function GET() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${INSTAGRAM_TOKEN}`;
  const res = await fetch(url, { next: { revalidate: 3600 } }); // revalidate every hour
  const data = await res.json();
  return NextResponse.json(data);
}
