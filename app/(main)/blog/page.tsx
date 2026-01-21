import ContactCard from "@/components/ContactCard";
import { getFeaturedPost, getPublishedPosts } from "@/lib/firebase/posts";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const categories = ["All Posts", "Events", "Tips & Tricks", "News", "Weddings"];

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const featured = await getFeaturedPost();

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        {/* FEATURED */}
        {featured && (
          <section className="lg:py-12 w-full">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-accent-pink dark:text-primary font-bold tracking-wider uppercase text-xs">
                  Featured Story
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-background-surface dark:bg-dark-background-base shadow-soft-glow dark:shadow-none border border-border-subtle dark:border-dark-border-subtle hover:border-accent-pink dark:hover:border-primary transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative h-64 w-full lg:h-auto lg:w-3/5 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url("${featured.imageUrl}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-surface dark:from-dark-background-base via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-background-surface/90 dark:lg:to-dark-background-base/90" />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-6 p-6 lg:p-12 z-10 relative">
                    <div className="flex flex-col gap-3">
                      <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-dark dark:text-white lg:text-4xl group-hover:text-accent-pink dark:group-hover:text-primary transition-colors">
                        {featured.title}
                      </h1>

                      <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="group/btn flex h-12 items-center justify-center gap-2 rounded-full bg-accent-pink bg-primary px-6 text-base font-bold text-white dark:text-brand-dark transition-all hover:bg-accent-pink-hover dark:hover:bg-primary-hover shadow-lg shadow-accent-pink/30 dark:shadow-primary/30"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CATEGORY BAR (UI ONLY) */}
        <section className="sticky top-[73px] z-40 bg-background-base/95 backdrop-blur-sm py-4 border-b w-full">
          <div className="mx-auto max-w-[1200px] flex gap-3 overflow-x-auto pb-2">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-accent-pink text-white"
                    : "bg-background-surface border hover:border-accent-pink hover:text-accent-pink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* POSTS GRID */}
        <section className="px-6 py-8 lg:px-20 lg:pb-20 w-full">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-4 h-full min-h-[420px]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border shadow-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url("${p.imageUrl}")` }}
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {p.createdAt?.toDate?.().toLocaleDateString() ?? ""}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-tight group-hover:text-accent-pink transition-colors">
                        {p.title}
                      </h3>

                      <p className="line-clamp-2 text-sm text-text-secondary">
                        {p.excerpt}
                      </p>
                    </div>

                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-accent-pink hover:underline">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCard />
      </div>
    </main>
  );
}
