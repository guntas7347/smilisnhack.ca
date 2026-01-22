import ContactCard from "@/components/ContactCard";
import { getActiveAddons } from "@/lib/firebase/addons";
import { getAllFaqs } from "@/lib/firebase/faq";
import { getAllPricing } from "@/lib/firebase/pricing";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  Hourglass,
  Sticker,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  sparkles: Sparkles,
  clock: Clock,
  hourglass: Hourglass,
  sticker: Sticker,
};

const PricingPage = async () => {
  const packages = await getAllPricing();
  const faqs = await getAllFaqs();
  const addons = await getActiveAddons();

  return (
    <main className="min-h-screen w-full flex items-center justify-center  dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        {/* HERO */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="relative w-full min-h-[450px] rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-8 sm:p-12 gap-6 bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-soft dark:shadow-soft-dark transition-all duration-300 group">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_UImSTB-kmijUgDr81fYNtKBZ3wcHOR0Oio-wxHs5uW-RxF8ZLl-ttnMtlG6SV0H3KiJfzLlHCfbX3VXg6xTZWoWMmt78s9MG61T-jSnG8Brx9RFC9UK40UnqcAiYxJwi32uX2f8cg_eIXBRTUMkV0V7z4ny_wIviITpgDaCzEBoW1EdUpq7ibovZhmI3T3snKC7vuLcDjSCD8AQ72JIDyTY6qE7M-BBRzciEQITvxKmJBTomuW1gdJjLbb9rA6CLJz2ABEoKs78")',
              }}
            />
            <div className="absolute inset-0 bg-white/90 dark:bg-black/70 z-0" />

            <div className="relative z-10 max-w-3xl flex flex-col gap-5">
              <h1 className="text-text-primary dark:text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                Memories worth{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent-gold">
                  framing.
                </span>
              </h1>
              <p className="text-text-secondary dark:text-text-secondary-dark text-lg sm:text-xl max-w-xl mx-auto">
                Simple, transparent pricing. No surprises.
              </p>
            </div>
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {packages.map((plan, i) => (
              <div
                key={plan.id}
                className={`flex flex-col gap-6 rounded-3xl p-6 lg:p-8 bg-white dark:bg-background-card-dark transition-all border ${
                  i === 1
                    ? "border-2 border-accent-gold shadow-soft dark:shadow-soft-dark"
                    : "border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark hover:-translate-y-1"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-text-primary dark:text-white">
                    {plan.title}
                  </h3>
                  <div className="mt-4 text-5xl font-black text-text-primary dark:text-white">
                    ${plan.price}
                  </div>
                </div>

                <Link href='/contact' className="h-12 flex justify-center items-center w-full rounded-full bg-primary text-white font-bold">
                  Book Now
                </Link>

                <ul className="flex flex-col gap-4 pt-4 border-t border-white/40 dark:border-white/10">
                  {plan.features.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2
                        className={`w-5 h-5 ${
                          i === 1 ? "text-primary" : "text-accent-gold"
                        } shrink-0 mt-0.5`}
                      />
                      <span className="text-sm text-text-secondary dark:text-text-secondary-dark">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ADDONS */}
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-text-primary dark:text-white">
            Customize Your Experience
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {addons.map((a) => {
              const Icon = iconMap[a.icon] || Sparkles;

              return (
                <div
                  key={a.id}
                  className="flex flex-col items-center justify-center p-6 gap-3 rounded-2xl border border-white/40 dark:border-white/5 bg-white dark:bg-background-card-dark shadow-card dark:shadow-card-dark"
                >
                  <Icon className="w-10 h-10 text-primary" />
                  <h3 className="font-bold text-center text-text-primary dark:text-white">
                    {a.title}
                  </h3>
                  <span className="text-xs font-bold text-text-secondary dark:text-text-secondary-dark">
                    {a.priceLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-3xl px-4 pb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-text-primary dark:text-white">
            Frequently Asked Questions
          </h2>

          {faqs.map((f, i) => (
            <details
              key={f.id}
              className="group bg-white dark:bg-background-card-dark rounded-2xl border border-white/40 dark:border-white/5 mb-4 shadow-card dark:shadow-card-dark"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-text-primary dark:text-white">
                {f.question}
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-text-secondary dark:text-text-secondary-dark">
                {f.answer}
              </div>
            </details>
          ))}
        </div>

        <ContactCard />
      </div>
    </main>
  );
};

export default PricingPage;
