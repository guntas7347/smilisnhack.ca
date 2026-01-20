"use client";

import { useEffect, useState } from "react";
import {
  getAllPosts,
  deletePost,
  setFeaturedExclusive,
} from "@/lib/firebase/posts";
import { useRouter } from "next/navigation";

type PostRow = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  featured?: boolean;
  createdAt?: any;
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);
  const router = useRouter();

  async function load() {
    const data = await getAllPosts();
    setPosts(data as any);
  }

  async function remove(slug: string) {
    if (!confirm("Delete?")) return;
    await deletePost(slug);
    await load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog CMS</h1>
        <button
          className="border px-4 py-2"
          onClick={() => router.push("/admin/blog/edit")}
        >
          + Add Blog
        </button>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Slug</th>
            <th className="text-left p-2">Published</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Featured</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.slug}</td>
              <td className="p-2">{p.published ? "Yes" : "No"}</td>
              <td className="p-2">
                {p.createdAt?.toDate?.().toLocaleDateString?.() ?? "-"}
              </td>

              {/* FEATURED */}
              <td className="p-2">
                <button
                  disabled={p.featured}
                  onClick={async () => {
                    await setFeaturedExclusive(p.slug);
                    window.location.reload();
                  }}
                  className={`relative inline-flex  cursor-pointer h-6 w-11 items-center rounded-full transition-colors ${
                    p.featured ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block  cursor-pointer h-5 w-5 transform rounded-full bg-white transition-transform ${
                      p.featured ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </td>

              {/* ACTIONS */}
              <td className="p-2 flex gap-2">
                <button
                  className="border px-2 py-1"
                  onClick={() => router.push(`/admin/blog/edit?slug=${p.slug}`)}
                >
                  Edit
                </button>
                <button
                  className="border px-2 py-1"
                  onClick={() => remove(p.slug)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
