import ContactCard from "@/components/ContactCard";
import getGallery from "@/lib/instagramPosts";
import { Loader } from "lucide-react";

type GalleryImage = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type?: string;
};

const GalleryPage = async () => {
  const images: GalleryImage[] = await getGallery();

  const hero = images.slice(0, 3);
  const grid = images.slice(0);

  return (
    <main className="min-h-screen w-full dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center mx-auto">
        <div className="w-full max-w-[960px] pb-12">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-text-primary dark:text-white">
              Capturing Smiles <br className="hidden md:block" />
              <span className="bg-clip-text bg-gradient-pink-gold">
                Across Toronto
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              Real moments from real events. No stock. No filler.
            </p>
          </div>

          {/* HERO SCROLLER */}
          <div className="mb-10 w-full overflow-hidden">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
              {hero.map((img) => (
                <a
                  key={img.id}
                  href={img.permalink}
                  target="_blank"
                  className="relative min-w-[280px] md:min-w-[320px] h-[400px] flex-shrink-0 snap-center overflow-hidden rounded-xl group cursor-pointer border border-white dark:border-white/5 shadow-card dark:shadow-card-dark bg-white dark:bg-background-card-dark"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${img.media_url}")` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <p className="font-bold text-sm line-clamp-2">
                      {img.caption || "Event Highlight"}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="sticky top-16 z-40 -mx-4  dark:bg-background-dark/95 py-4 px-4 mb-6 border-b border-white/40 dark:border-white/5 backdrop-blur-sm">
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {["All Events", "Weddings", "Corporate", "Parties", "Setups"].map(
                (f, i) => (
                  <button
                    key={f}
                    className={`h-9 shrink-0 rounded-full px-5 text-sm font-bold transition-colors ${
                      i === 0
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/10 text-text-primary dark:text-white hover:bg-pink-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {f}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* MASONRY GRID */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {grid.map((img) => (
              <a
                key={img.id}
                href={img.permalink}
                target="_blank"
                className="break-inside-avoid block relative overflow-hidden rounded-xl group cursor-zoom-in bg-white dark:bg-background-card-dark border border-white dark:border-white/5 shadow-card dark:shadow-card-dark"
              >
                <img
                  src={img.media_url}
                  alt={img.caption || "Gallery image"}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 opacity-95 hover:opacity-100"
                />

                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </a>
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 rounded-full border border-white/40 dark:border-white/10 bg-white dark:bg-background-card-dark px-8 py-3 text-sm font-bold text-text-primary dark:text-white transition-colors hover:bg-pink-50 dark:hover:bg-white/5">
              <span>Load More Memories</span>
              <Loader className="w-4 h-4 animate-spin" />
            </button>
          </div>
        </div>

        <ContactCard />
      </div>
    </main>
  );
};

export default GalleryPage;
