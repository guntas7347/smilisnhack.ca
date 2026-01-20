"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QuillEditor from "@/components/QuillEditor";
import { upsertPost, getPostBySlug } from "@/lib/firebase/posts";
import ImageUploader from "@/components/ImageUploader";
import { Loader } from "lucide-react";

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useSearchParams();
  const slugParam = params.get("slug");

  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  function isValidSlug(slug: string) {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
  }

  function slugify(s: string) {
    return s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  useEffect(() => {
    if (!slugParam) return;

    (async () => {
      setLoadingPost(true);
      const post = await getPostBySlug(slugParam);
      if (!post) {
        setLoadingPost(false);
        return;
      }

      setSlug(post.slug);
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setContent(post.content);
      setPublished(post.published);
      setImageUrl(post.imageUrl || "");

      setLoadingPost(false);
    })();
  }, [slugParam]);

  async function save() {
    if (!slug || !title) {
      alert("Missing slug or title");
      return;
    }

    if (!isValidSlug(slug)) {
      alert("Slug must be lowercase, numbers, and hyphens only");
      return;
    }

    if (!imageUrl) {
      alert("You must upload an image");
      return;
    }

    setSaving(true);

    await upsertPost({
      slug,
      title,
      excerpt,
      content,
      published,
      imageUrl,
    });

    setSaving(false);
    router.push("/admin/blog");
  }

  if (loadingPost) {
    return (
      <div className="p-6 flex gap-2">
        Loading... <Loader className=" animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl space-y-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {slugParam ? "Edit Blog" : "Add Blog"}
        </h1>
        <button
          className="border px-4 py-2"
          onClick={() => router.push("/admin/blog")}
        >
          Back
        </button>
      </div>
      <input
        className="border p-2 w-full"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);

          if (!slugParam) setSlug(slugify(e.target.value));
        }}
      />
      <input
        className="border p-2 w-full"
        placeholder="excerpt (short description)"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />{" "}
      <input
        className="border p-2 w-full"
        placeholder="slug (url path, e.g. car-detailing-tips)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        disabled={!!slugParam}
      />
      <ImageUploader value={imageUrl} onChange={setImageUrl} />
      <div className="border min-h-[400px]">
        <QuillEditor value={content} onChange={setContent} />
      </div>
      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        Published
      </label>
      <div className="flex gap-2">
        <button className="border px-6 py-2" disabled={saving} onClick={save}>
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}
