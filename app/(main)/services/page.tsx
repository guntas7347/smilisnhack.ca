import ContactCard from "@/components/ContactCard";
import { getActiveServices } from "@/lib/firebase/services";
import {
  Camera,
  Sparkles,
  Wand2,
  ArrowRight,
  ArrowLeft,
  Theater,
  Wallpaper,
  Layers3,
} from "lucide-react";
import Link from "next/link";


const ServicesPage = async () => {
  const services = await getActiveServices();
 

  const customizations = [
    {
      title: "Curated Props",
      desc: "From vintage stick props to neon signs and goofy glasses. We curate the table to match your event theme.",
      icon: Theater,
    },
    {
      title: "Premium Backdrops",
      desc: "Choose from shimmer walls, solid colors, florals, or custom branded step-and-repeat.",
      icon: Wallpaper,
    },
    {
      title: "Custom Prints",
      desc: "Custom print templates with your names, logo, or date. Available in 2x6 or 4x6.",
      icon: Layers3,
    },
  ];

  return (
    <main className="min-h-screen w-full flex items-center justify-center dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-text-primary dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            Our Premium Services
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark text-lg">
            Choose the perfect experience for your next event
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          {services.map((s, i) => {
            const Icon = Sparkles;
            const reverse = i % 2 === 1;

            return (
              <div
                key={s.id || i}
                className="group relative bg-white dark:bg-background-card-dark rounded-lg p-4 shadow-card dark:shadow-card-dark border border-white dark:border-white/5 transition-all duration-300"
              >
                <div
                  className={`flex flex-col ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-6 md:gap-8 items-stretch`}
                >
                  <div
                    className="w-full md:w-5/12 aspect-video md:aspect-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative"
                    style={{ backgroundImage: `url("${s.imageUrl}")` }}
                  >
                    <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />

                    {s.popular && (
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-background-card-dark/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/40 dark:border-white/10 shadow-sm">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex-1 flex flex-col justify-center py-2 md:py-6 ${
                      reverse ? "pl-4 text-left md:text-right" : "pr-4"
                    }`}
                  >
                    <div
                      className={`flex ${
                        reverse ? "flex-row-reverse md:flex-row" : ""
                      } justify-between items-start mb-2`}
                    >
                      <h3 className="text-2xl font-bold text-text-primary dark:text-white transition-colors">
                        {s.title}
                      </h3>
                      <Icon className="w-7 h-7 text-secondary dark:text-primary" />
                    </div>

                    <p className="text-text-secondary dark:text-text-secondary-dark text-base leading-relaxed mb-6">
                      {s.subtitle}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mb-8 ${
                        reverse ? "justify-start md:justify-end" : ""
                      }`}
                    >
                      {s.features.slice(0, 3).map((f, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full text-xs font-bold text-secondary dark:text-primary"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-auto flex items-center justify-between pt-4 border-t border-white/40 dark:border-white/10 ${
                        reverse ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-lg font-bold text-text-primary dark:text-white">
                        From{" "}
                        <span className="text-secondary dark:text-primary">
                          ${s.price}
                        </span>
                      </span>

                      <Link
                        href={`/services/${s.id}`}
                        className={`flex items-center gap-2 text-secondary dark:text-white font-bold transition-all ${
                          reverse ? "flex-row-reverse md:flex-row" : ""
                        }`}
                      >
                        {reverse ? <ArrowLeft size={18} /> : null}
                        View Details
                        {!reverse ? <ArrowRight size={18} /> : null}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {customizations.map((c, i) => {
            const Icon = c.icon;

            return (
              <div
                key={i}
                className="bg-white dark:bg-background-card-dark rounded-lg p-8 text-center border border-white dark:border-white/5 shadow-card dark:shadow-card-dark transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-white/60 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-secondary dark:text-primary">
                  <Icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3">
                  {c.title}
                </h3>

                <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        <ContactCard />
      </div>
    </main>
  );
};

export default ServicesPage;
