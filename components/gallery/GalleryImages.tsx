"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Post = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type?: string;
};

export default function GalleryImages() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/instagram");
        const json = await res.json();

        const filtered = (json.data || []).filter(
          (p: Post) =>
            (p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") &&
            p.media_url
        );

        setPosts(filtered);
      } catch {
        setPosts([]);
      }
    }
    load();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group"
            onClick={() => setSelectedImage(post.media_url)}
          >
            <div className="relative w-full h-full">
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram post"}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                className="object-cover group-hover:brightness-110 transition-all"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
