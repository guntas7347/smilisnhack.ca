import ContactCard from "@/components/ContactCard";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  Hourglass,
  Sticker,
  ChevronDown,
} from "lucide-react";

const PricingPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        {/* HERO */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="relative w-full min-h-[450px] rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-8 sm:p-12 gap-6 bg-white dark:bg-dark-card-bg border border-border-light dark:border-dark-pink-border shadow-xl transition-all duration-300 group">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_UImSTB-kmijUgDr81fYNtKBZ3wcHOR0Oio-wxHs5uW-RxF8ZLl-ttnMtlG6SV0H3KiJfzLlHCfbX3VXg6xTZWoWMmt78s9MG61T-jSnG8Brx9RFC9UK40UnqcAiYxJwi32uX2f8cg_eIXBRTUMkV0V7z4ny_wIviITpgDaCzEBoW1EdUpq7ibovZhmI3T3snKC7vuLcDjSCD8AQ72JIDyTY6qE7M-BBRzciEQITvxKmJBTomuW1gdJjLbb9rA6CLJz2ABEoKs78")',
              }}
            />
            <div className="absolute inset-0 bg-white/90 dark:bg-black/70 z-0" />

            <div className="relative z-10 max-w-3xl flex flex-col gap-5">
              <h1 className="text-dark-blue dark:text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                Memories worth{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">
                  framing.
                </span>
              </h1>
              <p className="text-text-muted dark:text-gray-300 text-lg sm:text-xl max-w-xl mx-auto">
                Simple, transparent pricing. No surprises.
              </p>
            </div>
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* CARD TEMPLATE */}
            {[
              {
                title: "The Starter",
                price: "$500",
                button: "Book Starter",
                accent: "text-accent-gold",
                items: [
                  "2 Hours of Service",
                  "Digital Only Sharing",
                  "Standard Backdrop",
                  "Online Gallery",
                ],
              },
              {
                title: "The Party",
                price: "$750",
                button: "Book Party",
                highlight: true,
                accent: "text-primary",
                items: [
                  "3 Hours of Service",
                  "Unlimited 4x6 Prints",
                  "Premium Props Table",
                  "On-site Attendant",
                  "Text & Email Sharing",
                ],
              },
              {
                title: "The Gala",
                price: "$1100",
                button: "Book Gala",
                accent: "text-accent-gold",
                items: [
                  "4 Hours of Service",
                  "Glam Filter Enabled",
                  "Custom Print Overlay",
                  "Luxury Guestbook",
                  "VIP Red Carpet",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col gap-6 rounded-3xl p-6 lg:p-8 border bg-white dark:bg-dark-card-bg transition-all ${
                  plan.highlight
                    ? "border-2 border-accent-gold shadow-2xl"
                    : "border-pink-100 dark:border-dark-pink-border hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-dark-blue dark:text-white">
                    {plan.title}
                  </h3>
                  <div className="mt-4 text-5xl font-black text-dark-blue dark:text-white">
                    {plan.price}
                  </div>
                </div>

                <button className="h-12 w-full rounded-full bg-primary text-white font-bold">
                  {plan.button}
                </button>

                <ul className="flex flex-col gap-4 pt-4 border-t border-dashed">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2
                        className={`w-5 h-5 ${plan.accent} shrink-0 mt-0.5`}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
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
          <h2 className="text-3xl font-bold text-center mb-10 text-dark-blue dark:text-white">
            Customize Your Experience
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Glam Filter", price: "+$150", icon: Sparkles },
              { name: "Extra Hour", price: "+$200/hr", icon: Clock },
              { name: "Idle Time", price: "+$75/hr", icon: Hourglass },
              { name: "Magnetic Prints", price: "+$100", icon: Sticker },
            ].map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-6 gap-3 rounded-2xl border bg-white dark:bg-dark-card-bg"
                >
                  <Icon className="w-10 h-10 text-primary" />
                  <h3 className="font-bold text-center">{a.name}</h3>
                  <span className="text-xs font-bold text-text-muted">
                    {a.price}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-3xl px-4 pb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-dark-blue dark:text-white">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "Do you travel outside of Toronto?",
              a: "Yes. GTA coverage. Travel fees may apply.",
            },
            {
              q: "How much space do you need?",
              a: "Ideally 10x10 feet. We can adapt if needed.",
            },
            {
              q: "Can I customize the print layout?",
              a: "Yes. Fully custom templates included.",
            },
          ].map((f, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-dark-card-bg rounded-2xl border mb-4"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold">
                {f.q}
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                {f.a}
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
