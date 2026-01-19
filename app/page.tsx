import ContactCard from "@/components/ContactCard";
import {
  ArrowLeft,
  ArrowRight,
  Locate,
  MapPin,
  PlayCircle,
  Star,
} from "lucide-react";

export default function Home() {
  const testimonials = [
    {
      name: "Sarah & Mike",
      type: "Wedding",
      rating: 5.0,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsQ8vvIOMCSkkHr-TBmKYktTSOoPwBKghH79DNiRf-pSbOiEVC0HDQnoZg_Ko4fYpefw_ZDXJlwLAvH_QipUgGquPNBcxIMBYgviPKEfMFWnGUcH4eQvCf4iY0SATAgJYG7aNJcB-gobDbbkUohiLL2kDiTdOusCkPVqH6dbxH6E7EmS02SiLSKruQM9flq4dJlv3ph213BbcPZUJG3Wg_knODfOXraR4bswk-e9BSJqVV_8x7ogIYyCYzs5kfGWkOO4JEHGK-H1c",
      text: "The highlight of our wedding! Everyone loved the props and the instant prints were such a great favor for guests.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5pTnHFQYehSK0wA2hKgKhfrr3xKP_PRLflIq5m3GbRqK6HQBJyW66YB1XUdlp2NDfDKO62zRhUoHCegMSNA0FVeX5hCas55meIgMB02KHZpROGF8NKcdr0KMdjrLphMdEl9JF3lhQTx364WinJYacNRWyEb4pPci6gB5PDQNqTWePKAgbabV37qwGy9WPUVIrxodLcqdQHiCsQsXrA6p8_JN4_bpcKa5BtW5XD62GXUZjY2QFmbE97KqSWLwpBb6tS4i56T8K8-I",
      initials: null,
    },
    {
      name: "TechCorp Gala",
      type: "Corporate",
      rating: 5.0,
      avatar: null,
      initials: "TC",
      text: "Professional and fun setup. The branding on the prints was perfect for our company event. Highly recommended!",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVHF4hjwbjCHw3n-Y72hpeEY7W-6RDU7YXHjJwBHupRnyeU1qEbvbROIaijEuUM4j3t5FNk3WPydwyM7RAwoj9SmZ_RxaIISOox7dTzAqcdHJQSGgPzBeMVL2uC7lGQic1L0TQ-kgt1x4RKmam2-6bYD7zKzMhfTJ4rQByqCLk9I_d4wEcOKUe2vS3hqr3LaqwiQFYwikeJKKKo6jhZ7qhZhjv2RTn0mNWyl3wOy0d9DQaQeaSylM0O7Av7ws0pztjmmCd_efc6Ak",
    },
    {
      name: "Emily's 30th",
      type: "Birthday",
      rating: 4.9,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBuxjBvFDH7eRUzbAC-MRApdQSkKrs75Obfmo1borD4b0bb3bz_RunrEq4M2WOdNRXBJ-b0zmVWgTKcx9Kldo74i8IATkOemjyP7FWHwvgi624o6j7f-dtInkE55T3A6fyrLga4dRchBtROzbK20C3KpTO3qqQdcEMV6Bad7YrVTTnmIFle0GrbqE_rWyCkFnNzb33zbzI4leClTDCwz7dXepD_kSog6tGlqE5R4JVknkwJ8YGGKIxz-WNKz_xH9Ikgvkp1E7Lag98",
      initials: null,
      text: "Best birthday addition ever. The backdrop was stunning and the attendant was super helpful all night.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWpccFQngmTbigOFScZkDJ6KuCvbkLe41zMem7Zqk4Rppr0yUoNqPOxmEBcU9W2Bvqj6XfnKtln93cZtMaWwP3MPMGGeRKSIfFBKuxK3YCrom88Vx_tt-ZmZ5KqY9a8qYNvM8wLJtVDYc8QyigQdLs-ZU1zCXaxtXIbUB4MNxNe0WcLFoUVqnbYeSCUx3gzKBhsw4SJxbWePBTTwh6Wv9Goj7BDU4hiz_086cdaX-IuPvPbqNABancSZEphMxevDy48eP8DUTwjSY",
    },
  ];

  const gallery = [
    {
      title: "Neon Nights",
      location: "Downtown Toronto",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBw0cwkbwFViXYO0m7fBG8Qevy7FwVewpAJIAzCeOUTC1AdbyHZ9w-lgDLzaYZWcw7f9eDPNmLTWW5sVrgyJkoOV2vOBgpqwfBdoDppBUxRE9gfMQSYgJ2dS5ghhUZf0WQyDcnsZ1OI7HKA6gSw8wOZjhbSufyIuj6QVT6FIyuljRIenDxZct7xnnSjs3NYpWN04RfBGw_ca5KqRszcMGwdM4o1okecFcxkZFa4wC4hFHu33j2fgNUWhz7U-0zFovUxq66MIg8AkwQ",
      extraClass: "",
    },
    {
      title: "Classic Wedding",
      location: "Liberty Grand",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2tX_wROLaresGF5ZWVpu-9ZmitFE8q2ag-fgxBhxzygE_tJm3FZcUP4bqvSvw6BWzhIp3ZWpR5VOLvkiMlAk69cn2_NYC8vDeQTeeKU39qXngpV_cGTQLYtKn7NG_GEnv4RTWqqP0-psCeG6bVC56-Rc3Wk10NFS5PIKystbUfxa5IRBqAgtk0lt75sB6CUhpWmkPbEVmWQRjWGSDhOgOiJMfiHtjZwC6Tn0TVf-QcPVfqCQBPRGVdKFDRXO76-hXJOLzzhvrKes",
      extraClass: "sm:mt-8",
    },
    {
      title: "Engagement Party",
      location: "Distillery District",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9cvKP67eqqLSBDgQMjzqQ5RfE8CAugNiPjZvV3jPx1BHdA9v7v-JPrOdQiDfV0FU3dT5gpzmcFkAQj15xQZ7AS3WEOwOSibFEbC9YSgM4w7OBYLUEo0nGb2XqA-0k-tgitDXF2LONxHH55gAt-fLUQ2FFYxRT9dan98UhrII9LvDg0KoulansTzJLVcJWzAfGrGySZnosAQg-UgcjG9587DZ9ikBV4yH_K7BosFSOVNi_qAdENOLBzb80yyP09UKWdwgakQUve0",
      extraClass: "md:mt-0 sm:mt-8",
    },
    {
      title: "Summer Festival",
      location: "High Park",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZSQ0-6u6uhIzhZX7Xwgq54A-1oEDOca-TJ90tu5PXh1cmw1OGIO8HlyMlYU1pd_di6CfpdsPzr0GlK7enGTeVapgc6ZK_qSrcjkY_TfgY1R5kXVQNfac9Z4NKCT_HN3F_hALJdK4raikbMpLHGG4fqOmPY75HeHqfKMEYD2Nry_UWT2V0Xrxk-tYkRWerOKzkeB-imLaQSbIxdPThvJOqR_a5r2dYQHCZi0THKB2V8cLxisp97TgN2xXJI5yAHNYBlk5ZrUt0BHE",
      extraClass: "hidden sm:block md:hidden",
    },
  ];

  return (
    <div className="">
      <main className="flex flex-col items-center pb-10 px-4 sm:px-10">
        <div className="w-full max-w-[960px] flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-background-card-dark border border-white/60 dark:border-white/5 shadow-soft dark:shadow-soft-dark transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-pink-200 dark:via-primary/30 to-transparent" />
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12 xl:p-16 gap-6 z-10">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 dark:bg-primary/10 border border-pink-100 dark:border-primary/20 px-4 py-1.5 text-xs font-bold text-primary dark:text-primary uppercase tracking-wide">
                  <MapPin className="material-symbols-outlined text-[14px] text-primary dark:text-primary" />
                  Toronto &amp; GTA
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight text-text-primary dark:text-white">
                  Capture the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-secondary">
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
                  <button className="flex h-12 items-center justify-center rounded-full bg-secondary hover:bg-yellow-400 px-8 text-base font-bold text-text-primary shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95">
                    Check Availability
                  </button>
                  <button className="flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary/20 dark:border-white/10 bg-transparent px-8 text-base font-bold text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
                    <PlayCircle className="material-symbols-outlined" />
                    See How It Works
                  </button>
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
                    <Star className="material-symbols-outlined text-secondary text-sm fill-current" />{" "}
                    <Star className="material-symbols-outlined text-secondary text-sm fill-current" />{" "}
                    <Star className="material-symbols-outlined text-secondary text-sm fill-current" />{" "}
                    <Star className="material-symbols-outlined text-secondary text-sm fill-current" />{" "}
                    <Star className="material-symbols-outlined text-secondary text-sm fill-current" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-display font-bold text-text-primary dark:text-white">
                What Our Clients Say
              </h2>
              <div className="flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-background-card-dark hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary text-text-primary dark:text-white transition-colors shadow-sm">
                  <ArrowLeft className="material-symbols-outlined" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-text-primary hover:bg-yellow-400 transition-colors shadow-sm">
                  <ArrowRight className="material-symbols-outlined" />
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="snap-start min-w-[300px] max-w-[340px] flex-1 flex flex-col p-6 rounded-2xl bg-white dark:bg-background-card-dark border border-white/50 dark:border-white/5 shadow-card dark:shadow-card-dark transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {t.avatar ? (
                      <div
                        className="h-12 w-12 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                        style={{ backgroundImage: `url("${t.avatar}")` }}
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-accent-blue font-bold border border-blue-100 dark:border-blue-800">
                        {t.initials}
                      </div>
                    )}

                    <div>
                      <p className="font-bold text-sm text-text-primary dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">
                        {t.type}
                      </p>
                    </div>

                    <div className="ml-auto flex">
                      <Star className="material-symbols-outlined text-secondary text-[20px] fill-current" />
                      <span className="text-sm font-bold ml-1 text-text-primary dark:text-white">
                        {t.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed mb-4">
                    "{t.text}"
                  </p>

                  <div
                    className="mt-auto h-32 w-full rounded-xl bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url("${t.image}")` }}
                  />
                </div>
              ))}
            </div>
          </div>
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
              <a
                className="text-primary dark:text-primary font-bold text-sm hover:text-primary-hover transition-colors hover:underline"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map((item, i) => (
                <div
                  key={i}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer border border-white dark:border-white/5 shadow-card dark:shadow-card-dark bg-white dark:bg-background-card-dark ${item.extraClass}`}
                >
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-xl font-display font-bold mb-1">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-1 text-secondary text-sm font-medium">
                        <MapPin className="material-symbols-outlined text-[16px]" />
                        <span>{item.location}</span>
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
        <span className="material-symbols-outlined text-[28px]">
          chat_bubble
        </span>
      </button> */}
    </div>
  );
}
