import ContactCard from "@/components/ContactCard";
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

const ServicesPage = () => {
  const services = [
    {
      title: "The Open Air Booth",
      price: 599,
      badge: "Most Popular",
      badgePos: "left",
      icon: Camera,
      reverse: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1rpy4cpOGuq8EqtKoKJGpnfoT8WylLaX0zCQcIztUy3VB7bx9ZiIjgGLp9oZsQZt6nk2Nby2UR8J0xxHGVn3IdvdZkdFBFBn-whHiA1KmeSlN0XO4NI6NniRzCQ-9H2-fbVm0nGm8YdBpv3OGdoI-5jJBcisOKy_lhPsMp3MzsRrWYKdlBEGHhowHTgIEyKgHYqXSnUMft1lU5WKS63aU06fFMwuBvaob3mlMhzWDrbcOTNtQx83K64s-76g783r8yHBe2PJ3W-I",
      desc: "Sleek, modern, and fits anywhere. Our open-air design allows for large group shots and fits perfectly in tight spaces. Comes with professional lighting.",
      features: ["Unlimited Prints", "Digital Sharing", "Standard Props"],
    },
    {
      title: "The 360 Experience",
      price: 899,
      badge: "Trending",
      badgePos: "right",
      icon: Sparkles,
      reverse: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWzOO9rWAw-8vUhGUQMrquehq1Ds7LU6LzOFRJLjOZFsipz4x1M918Us3r3vti4byq7xQExH3X94UF5nk-9PsmTokY51aKI6kayZ2aWh-xtYFMtKdr-Zbq6WGSO9EvsKwaA5urBL9SNAgLfQVmFH9G8CJNPWv6fIpg0Z5fOgNJUSFrCodZSsGShRgTkA37V9U55rz2jAPPS4-rmxxKRxZI4krINSF3OcaLEg6jHMbqIBFiFY7usBWLpBz_4u6Xg6CKIRvDG2od6A",
      desc: "Red carpet vibes. Capture 360-degree slow-motion videos that are instantly shareable. Perfect for high-energy parties and corporate activations.",
      features: ["Slow Motion", "Music Overlay", "Instant Airdrop"],
    },
    {
      title: "The Glam Booth",
      price: 749,
      badge: null,
      icon: Wand2,
      reverse: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDB7Gz806YiCUdk3yQjNYBhcm8GfpQebukVJxTwF93EXFX7UA6IzYbE2spmEKD2ZSdvPYqCgrQn-BBjUHi3a9eVT8eDVoYUEPM_It46Z9WBGCnAgqL4sVJgiUMGNixwfGXaPvcCJTNzfZvk6D_V9ktRbushw9T1T1dztDMDmKqJzJ4ArfomFTLwEylCnRRNzYb2V4RhqQih9M7LibAECUn-YlZUMrXl0-vOk8261z02C90MSmFsr29qH9kIJFGwVBwXy6FOjLDpWSE",
      desc: "Get that celebrity look with our Kardashian-style black & white beauty filter. High-contrast imagery that makes everyone look flawless.",
      features: ["Beauty Filter", "4x6 Prints", "White Backdrop"],
    },
  ];

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
    <main className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-5xl px-4 pb-12 md:pb-8 flex flex-col items-center">
        <div className=" text-center mb-12">
          <h2 className="text-text-main dark:text-text-inverse text-3xl md:text-4xl font-black tracking-tight mb-3">
            Our Premium Services
          </h2>
          <p className="text-text-muted dark:text-text-muted-dark text-lg">
            Choose the perfect experience for your next event
          </p>
        </div>
        <div className="flex flex-col gap-8 mb-12">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                className="group relative bg-white dark:bg-surface-dark rounded-lg p-4 shadow-xl shadow-secondary/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-secondary/10 dark:hover:shadow-black/50 transition-all duration-300 border border-secondary/10 dark:border-secondary/20"
              >
                <div
                  className={`flex flex-col ${
                    s.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-6 md:gap-8 items-stretch`}
                >
                  <div
                    className="w-full md:w-5/12 aspect-video md:aspect-auto bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative"
                    style={{ backgroundImage: `url("${s.image}")` }}
                  >
                    <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />

                    {s.badge && (
                      <div
                        className={`absolute top-4 ${
                          s.badgePos === "right" ? "right-4" : "left-4"
                        } bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-secondary/10 shadow-sm`}
                      >
                        {s.badge}
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex-1 flex flex-col justify-center py-2 md:py-6 ${
                      s.reverse ? "pl-4 text-left md:text-right" : "pr-4"
                    }`}
                  >
                    <div
                      className={`flex ${
                        s.reverse ? "flex-row-reverse md:flex-row" : ""
                      } justify-between items-start mb-2`}
                    >
                      <h3 className="text-2xl font-bold text-text-main dark:text-white group-hover:text-secondary dark:group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <Icon className="w-7 h-7 text-secondary dark:text-primary" />
                    </div>

                    <p className="text-text-muted dark:text-text-muted-dark text-base leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mb-8 ${
                        s.reverse ? "justify-start md:justify-end" : ""
                      }`}
                    >
                      {s.features.map((f, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-surface-light dark:bg-white/5 border border-secondary/20 dark:border-primary/20 rounded-full text-xs font-bold text-secondary dark:text-primary"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-auto flex items-center justify-between pt-4 border-t border-secondary/10 dark:border-white/10 ${
                        s.reverse ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-lg font-bold text-text-main dark:text-text-inverse">
                        From{" "}
                        <span className="text-secondary dark:text-primary">
                          ${s.price}
                        </span>
                      </span>

                      <button
                        className={`flex items-center gap-2 text-secondary dark:text-white font-bold hover:gap-3 transition-all ${
                          s.reverse ? "flex-row-reverse md:flex-row" : ""
                        }`}
                      >
                        {s.reverse ? <ArrowLeft size={18} /> : null}
                        View Details
                        {!s.reverse ? <ArrowRight size={18} /> : null}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customizations.map((c, i) => {
            const Icon = c.icon;

            return (
              <div
                key={i}
                className="bg-white dark:bg-surface-dark rounded-lg p-8 text-center border border-secondary/10 dark:border-secondary/20 shadow-lg shadow-secondary/5 dark:shadow-black/20 hover:-translate-y-1 hover:border-secondary/50 dark:hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto bg-surface-light dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-secondary dark:text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  {c.title}
                </h3>

                <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>{" "}
        <ContactCard />
      </div>{" "}
    </main>
  );
};

export default ServicesPage;
