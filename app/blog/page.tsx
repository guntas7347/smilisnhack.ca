import ContactCard from "@/components/ContactCard";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const categories = ["All Posts", "Events", "Tips & Tricks", "News", "Weddings"];

const posts = [
  {
    title: "Corporate Event Ideas in Toronto",
    date: "Oct 12, 2023",
    tag: "Events",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaFlCbCfvEpXmdaiik3YzZbZAjvtKkqrRkbWoiy51FFC1wf9y-Y2FUBOVNcFA6HDcQgHTLpmF7MgrjB-7IicTjeea0-n26rCYNMlP00VV91lzKem_P6YjzWld7GoTRe3j6N8IeNSdiNhCEdWiBqiPPYFm_PQtkKVctC7auDFtxEqOEvj9oH4tkUtm8VgvnU-8DhXjlvCxSABHWxt9TGFhV9TcjzuJY7h0cBZsduplhuNadS2nJmk6JfCP0NwcJm43rctOssw04uSE",
    excerpt:
      "Planning a corporate bash? Here are some fun ideas to break the ice and get everyone engaging with our modern booths.",
  },
  {
    title: "How to Pose Like a Pro",
    date: "Sep 28, 2023",
    tag: "Tips",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9MOYk9LcrmguU_nnxGBzi5fvakLcIeFEiND41uv4VnWq18KeYBOiOglwU9QMbruqVvnxk-7Q7uBK4AfFlatqsN3n4-Pms9vy76hxNms2KhcjDRfJbBChmjx3huHVT29BCZnU1AiR0Rw8gbVZGdtkqzG0jCV6E-jPkQgJav-1lLtrw08C5jaJbZd98KgEWxGZfMwK4PAVGdsPskCJ2mUGZOOvjJDZHFCrv7to79KneEGkjmQ-3z-8q9I1YdHcI62LFY79F6_5Samk",
    excerpt:
      "Master the art of the photo booth pose with these tips. From duck face to group hugs, we cover it all.",
  },
  {
    title: "New Backdrop Collection: Summer Vibes",
    date: "Sep 15, 2023",
    tag: "News",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDec1vUczB0fPvwKec50eTPeprxfnRR84HFdxs_Jrp8cHL6eQNfPtmdlh9YLCkHZ42JRqb28TqCPVtZaOKu0mRFgMQtj1k0BBjswVaXclzAHTZK4QajZ40bKtfB1pCXfSCMa3aF_WjKZXpw7tPoPPaVWesvztJW4c714Z8wHntjHlaN0vTgFJ3s7QPXCtGiYl7H8lHwSa21mY19LTfBfrCPQuy5WkyfvEyDv8d8WCp6nEdnPSopv6QN-Pmro8P2ikTb2U8Y7IFw728",
    excerpt:
      "Check out our vibrant new backdrops perfect for summer parties. Bright yellows, ocean blues, and tropical prints.",
  },
  {
    title: "Client Spotlight: The Johnson Anniversary",
    date: "Aug 30, 2023",
    tag: "Spotlight",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjQloAlQ0VmIEXiObkPd2Sh9Ve8fTuI5mMRq-UpdHZOxM04a7imWtLuTj49PnzKKp30Px1cvWCaHWP-8iLDowyJ0ixyCweQIf2ok6CZZVKicfo8wyFpeyV3X5HuQiYsZeAj02y8Dj07GxpCyEQmMhlacORCm1LyC-l_yrO91eSDLcfyXY88eBqSJfK9OCYL-4p30xSeMuUjo8CdpezEgHUomHk_emkzRCliH5F-zioBb4JCBwe5mVA9mJn-kbsMBtaC2fYPmYsSsI",
    excerpt:
      "A look back at the beautiful Johnson 50th Anniversary party and how our booth added class.",
  },
  {
    title: "DIY Props vs. Professional Props",
    date: "Aug 12, 2023",
    tag: "Tips",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXjZpzpeotIpxBj7XD6LjhDLFLW7O6KyQcNiPD6g3NLWzGOV4L0-0Keq50f13bNASVSH4ZfpRhZAXGZO_rR1xH7murQFYtq4bY4kNGJWZleGbGbTogR23JOneYjfEA9Xgz9fJAPH7ptRFejRfJtp-SuzVzBQCaKd3K0xEM6cRShDiATfRSKgQM6DTKjj1iBDnP-eYy3EwOuWI7HvGTpte8H18jcg9jH_Kem45Kpa_z89l939_uoqRbsTzyNV_FYfvOJi00Ahp3SfE",
    excerpt:
      "Should you make your own or rent ours? We break down the cost and fun factor.",
  },
  {
    title: "The Rise of the GIF Booth",
    date: "Jul 05, 2023",
    tag: "Tech",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPpqQzDtCmNZqICHxunat-i8GgA2V4S9_TVmyi2gqum1EBP-xYlsJ8YT0BvPoUCY9EFs_uvest-MUV05u1iQOzItAjZpuKGeILy0u32QnjPS1hUvpzMPMkJDbCHS_wK_qLqgb1mOi9f522NJIpIXfGzEnJw_R4fKqm9CNL3t-n6pVwZHMt1CShDAM6gvHPG9W6mE5eoSVL4xKnhd8YpZ6V9RygI-KUjZKRPxdufP7GfECTHLAW5J3cB6veQUrcY_ZMt1yBM4XYkU",
    excerpt:
      "Why static photos are so last year. Learn how GIF booths are taking over social feeds.",
  },
];

const BlogPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        {" "}
        <section className="lg:py-12">
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
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxJ23ZfOJcQLjTKxndzHZQLMkVVwZYGRc9gG2WNFWLx0s0S9DgLxrh2lATLd2mtbX4s1QYjQ4FtUXeC3CvsQkbIlyfKou90akSZHFu4nl5OSO11h4iBNFK0b251pevRGNhvz_j5sDsj9T3boMSmxMUAascmbxyjeA79DUBiPYd8Tj1o_-qD-R_DcFu_pNmscSYE2iRSbaHMS-PEnQUbrvHMmn9LrjT1T63vNgxrqTo5-vqGXIaUMEZBwU2BrBgs1_mTcv_g3hZQYc")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-surface dark:from-dark-background-base via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background-surface/90 dark:lg:to-dark-background-base/90" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-6 p-6 lg:p-12 z-10 relative">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-accent-pink/10 dark:bg-primary/10 border border-accent-pink/20 dark:border-primary/20 px-3 py-1 text-xs font-bold text-accent-pink dark:text-primary">
                        Weddings
                      </span>
                      <span className="text-xs font-medium text-text-secondary dark:text-dark-text-secondary">
                        • 5 min read
                      </span>
                    </div>
                    <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-dark dark:text-white lg:text-4xl group-hover:text-accent-pink dark:group-hover:text-primary transition-colors">
                      Top 5 Reasons You Need a Photo Booth at Your Wedding
                    </h1>
                    <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                      Discover why a photo booth is the perfect addition to your
                      special day. From candid memories to entertaining guests
                      during downtime, find out how to make your wedding
                      unforgettable.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="group/btn flex h-12 items-center justify-center gap-2 rounded-full bg-accent-pink bg-primary px-6 text-base font-bold text-white dark:text-brand-dark transition-all hover:bg-accent-pink-hover dark:hover:bg-primary-hover shadow-lg shadow-accent-pink/30 dark:shadow-primary/30">
                      <span>Read Article</span>
                      <ArrowRight className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CATEGORY BAR */}
        <section className="sticky top-[73px] z-40 bg-background-base/95 backdrop-blur-sm  py-4  border-b">
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
        {/* POSTS */}
        <section className="px-6 py-8 lg:px-20 lg:pb-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <article key={i} className="group flex flex-col gap-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border shadow-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url("${p.img}")` }}
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
                      {p.tag}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Calendar className="w-4 h-4" />
                      <span>{p.date}</span>
                    </div>

                    <h3 className="text-xl font-bold leading-tight group-hover:text-accent-pink transition-colors">
                      {p.title}
                    </h3>

                    <p className="line-clamp-2 text-sm text-text-secondary">
                      {p.excerpt}
                    </p>

                    <a className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-accent-pink hover:underline">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button className="rounded-full border px-8 py-3 text-sm font-bold hover:bg-accent-pink hover:text-white transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
        {/* NEWSLETTER
      <section className="mb-10 px-6 py-12 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[960px] rounded-3xl border p-8 lg:p-16 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 border">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-3xl font-black tracking-tight lg:text-4xl">
              Get Party Inspiration Delivered
            </h2>

            <p className="max-w-lg text-base text-text-secondary">
              Subscribe for updates on new backdrops, tips, and offers.
            </p>

            <form className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                className="flex-1 rounded-full border px-6 py-3 text-sm"
                placeholder="Enter your email"
                type="email"
              />
              <button className="shrink-0 rounded-full bg-primary px-8 py-3 text-sm font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}
        <ContactCard />
      </div>
    </main>
  );
};

export default BlogPage;
