import ContactCard from "@/components/ContactCard";
import Testimonials from "@/components/Testimonials";
import { getGallery } from "@/lib/instagramPosts";
import { timeAgo } from "@/lib/utils";
import { Calendar, GalleryHorizontal, MapPin, Star } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const gallery = await getGallery(1);
  return (
    <div className="">
      <main className="flex flex-col items-center pb-10 px-4 sm:px-10">
        <div className="w-full max-w-[960px] flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-background-card-dark border border-white/60 dark:border-white/5 shadow-soft dark:shadow-soft-dark transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-pink-200 dark:via-primary/30 to-transparent" />
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12 xl:p-16 gap-6 z-10">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 dark:bg-primary/10 border border-pink-100 dark:border-primary/20 px-4 py-1.5 text-xs font-bold text-primary dark:text-primary uppercase tracking-wide">
                  <MapPin className="  text-[14px] text-primary dark:text-primary" />
                  Toronto &amp; GTA
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight text-text-primary dark:text-white">
                  Capture the{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-pink-400 to-secondary">
                    Fun
                  </span>{" "}
                  in Toronto
                </h1>
                <p className="text-text-secondary dark:text-text-secondary-dark text-lg max-w-md leading-relaxed font-medium">
                  Premium photo booth experiences for weddings, parties, and
                  corporate events. Make your memories last forever with instant
                  prints and digital sharing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    href="/services"
                    className="flex h-12 items-center justify-center rounded-full bg-secondary hover:bg-yellow-400 px-8 text-base font-bold text-text-primary shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Services
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary/20 dark:border-white/10 bg-transparent px-8 text-base font-bold text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <GalleryHorizontal className=" " />
                    Gallery
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <div className="flex -space-x-3">
                    <div
                      className="h-9 w-9 rounded-full border-2 border-white dark:border-background-card-dark bg-gray-100 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAHSxEBJ4hZU7dJWuv3Ghw7un6S8bjCHrOWKkwqLkSH3O81okrekhZPFjTE9SQCcK6bD0ZWCBvU62xYLBXRMPOOpafBk4BnyFeCZ0V87lVcXp6AMMphHwQgdMErWciQ2Evfabtj95QKpcD5JQAqXygt6jMqwO7cicncdbvhGkrL7nhq_iSmPotQG-jz3QToCHctGRZ7zYHGEiUYzEX-GvaoXTCgZaM6P4GVNUMUdtmWLy9e2H09M1vD_NqYlRuUO5IqAUotaY_NxI")',
                      }}
                    />
                    <div
                      className="h-9 w-9 rounded-full border-2 border-white dark:border-background-card-dark bg-gray-100 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqKMkZdUIUbtOK_yWnVu7330wSBBimP3NZHL2SGhNVtxc2ypap4vCiZPvi45YYSEQ2X25aSYm-ZtNsxaEnB8Z9mIoCf2zKrqiCZG8prLMm6Px2CGjIFKc6VVOstosHQhbup2yJRv4QEXPY0hxRGv5DEHUH6HbLc0QS5o0bLbh9zJ_352TG59wyiKvnAnZINGm4CCqgKICjIT39e43YBx_RK_TGH1DgnSRp10pgDxrMPcVdvKopjs0aG_oXFHPSGGUQQzMiwYNyfWE")',
                      }}
                    />
                    <div
                      className="h-9 w-9 rounded-full border-2 border-white dark:border-background-card-dark bg-gray-100 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9d4Chb4vU8_bvM8tTZMAWWMQ6jRtpa-Lg8An520YzMvQKLVRgLDfwrVOKMdyifuhqjKq4AxxHZEbS7VjIjJFYf3AiVHK4ax2miX4x25rFtJszaADW1ZP8NVfKNKB_s4wcIIl10otaKDdwZe-WSqPQghJvumdl_IkRVehNh_XMfmDjci-OAF53cxHkdlJfYykHtad26eJptykPHyrJmPlkfyWEqBMD0c6gC_TD-PVdPxvuhHm88x772ZYdPWkCqHVe-dA4TipMo5o")',
                      }}
                    />
                  </div>
                  <p className="font-bold text-text-primary dark:text-white">
                    Loved by 500+ clients
                  </p>
                </div>
              </div>
              <div className="relative h-80 w-full lg:h-auto lg:w-[45%] overflow-hidden bg-pink-50 dark:bg-background-dark/30">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-10 mix-blend-multiply dark:mix-blend-screen dark:opacity-40" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl z-10 mix-blend-multiply dark:mix-blend-screen dark:opacity-40" />
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv7Q2N7umKOEdjuweY3YWs5fvA2VLGeSoV1CtD4YXNnuHtvwoR4QHRTSzpsvWCqeZd-Z2VoOI9FQ2uZj0RuKJZGSSIla3aMO4V77g8rtnGJu6QB5oEW7KHvSD-GX1i7x27WrRXK88rpmrvcA2V663sHHg_l3vH8sg5RcbIPT6tLhCqSDvSU2bHm2q4UXxd7l21c3icuilcjcW2z0YF-q5_KZOQM7zwXkrtiIyJDN9ktN-hRzbbxSYHKqoYPQxMIgRePr7VqqM0E0c")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/80 dark:bg-background-card-dark/80 border border-white/40 dark:border-white/10 p-4 rounded-2xl shadow-lg z-20">
                  <div className="flex justify-between items-center text-text-primary dark:text-white">
                    <span className="font-bold text-sm">Latest Event</span>
                    <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-bold">
                      Yesterday
                    </span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Star className="  text-secondary text-sm fill-current" />{" "}
                    <Star className="  text-secondary text-sm fill-current" />{" "}
                    <Star className="  text-secondary text-sm fill-current" />{" "}
                    <Star className="  text-secondary text-sm fill-current" />{" "}
                    <Star className="  text-secondary text-sm fill-current" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonials />
          <div className="flex flex-col gap-6 pt-8">
            <div className="flex items-end justify-between px-2 pt-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-display font-bold text-text-primary dark:text-white">
                  Recent Works
                </h2>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                  From intimate gatherings to grand galas
                </p>
              </div>
              <Link
                className="text-primary dark:text-primary font-bold text-sm hover:text-primary-hover transition-colors hover:underline"
                href="/gallery"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer border border-white dark:border-white/5 shadow-card dark:shadow-card-dark bg-white dark:bg-background-card-dark`}
                >
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${item.media_url}")` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-xl font-display line-clamp-1 font-bold mb-1">
                        {item.caption}
                      </p>
                      <div className="flex items-center gap-1 text-secondary text-sm font-medium">
                        <Calendar className="  text-[16px]" />
                        <span>{timeAgo(item.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactCard />
        </div>
      </main>
      {/* <button className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-text-primary shadow-lg shadow-yellow-500/20 transition-all hover:scale-110 active:scale-95 hover:shadow-yellow-500/40">
        <span className="  text-[28px]">
          chat_bubble
        </span>
      </button> */}
    </div>
  );
}
