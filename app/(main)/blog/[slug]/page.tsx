import { getPostBySlug } from "@/lib/firebase/posts";
import { notFound } from "next/navigation";

export default async function IndividualBlogPage({ params }: any) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="flex-grow">
      <div className="flex flex-col items-center px-4 md:px-10 py-8 md:py-12">
        <article className="w-full max-w-[800px] flex flex-col gap-8">
          {/* TITLE */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <div className="text-sm text-gray-500">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString()
                : ""}
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
