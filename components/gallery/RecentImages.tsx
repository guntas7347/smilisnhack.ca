"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  media_type: string;
  media_url: string;
  caption?: string;
};

export default function RecentImages() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/instagram");
        const json = await res.json();
        const filtered = (json.data || [])
          .filter(
            (p: Post) =>
              (p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") &&
              p.media_url
          )
          .slice(0, 4);
        setPosts(filtered);
      } catch {
        setPosts([]);
      }
    }
    load();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="group aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer animate-scale-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <Image
            height={1000}
            width={1000}
            src={post.media_url}
            alt={post.caption || `Work ${index + 1}`}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all"
          />
        </div>
      ))}
    </div>
  );
}
