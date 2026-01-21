import { Star, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { getServiceById } from "@/lib/firebase/services";
import { notFound } from "next/navigation";
import Link from "next/link";

const IndividualServicePage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;

  const service = await getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="w-full max-w-[960px] mx-auto px-4 pb-12 md:pb-8 flex flex-col">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 py-6 px-2">
          <a
            className="text-primary/70 hover:text-primary text-sm font-medium"
            href="/services"
          >
            Services
          </a>
          <span className="text-primary/70 text-sm font-medium">/</span>
          <span className="text-text-primary dark:text-white text-sm font-medium">
            {service.title}
          </span>
        </div>

        {/* Hero */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center py-6">
          {/* Content */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-col gap-3">
              {service.popular && (
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-secondary/10 px-3 py-1 text-secondary border border-secondary/20">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-text-primary dark:text-white">
                {service.title}
              </h1>

              <p className="text-lg md:text-xl font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed max-w-xl">
                {service.subtitle}
              </p>
            </div>

            {/* Rating (static for now) */}
            <div className="flex items-center gap-2">
              <div className="flex text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-text-secondary dark:text-text-secondary-dark">
                ({service.eventsCount}+ Events)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                Check Availability
              </Link>
              <Link
                href="/gallery"
                className="flex items-center justify-center rounded-full h-12 px-8 border border-white/40 dark:border-white/10 bg-white dark:bg-background-card-dark text-text-primary dark:text-white font-bold"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25" />
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-background-card-dark shadow-soft dark:shadow-soft-dark border border-white/40 dark:border-white/5">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={service.imageUrl}
                alt={service.title}
              />
            </div>
          </div>
        </div>

        {/* Feature chips */}
        <div className="flex gap-3 py-8 flex-wrap">
          {service.features.map((label, i) => (
            <div
              key={i}
              className="flex h-10 items-center gap-2 rounded-full bg-white dark:bg-background-card-dark px-4 border border-white/40 dark:border-white/10 shadow-card dark:shadow-card-dark"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-text-primary dark:text-white text-sm font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="grid lg:grid-cols-12 gap-10 mt-8">
          {/* Left */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-bold pb-6 text-text-primary dark:text-white border-b border-white/40 dark:border-white/10 mb-6">
                What's Included
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((title, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark"
                  >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-text-primary dark:text-white">
                        {title}
                      </h3>
                      <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                        Included in the package.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-soft dark:shadow-soft-dark p-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-text-primary dark:text-white">
                    ${service.price}
                  </span>
                  <span className="text-text-secondary dark:text-text-secondary-dark">
                    / {service.duration} hours
                  </span>
                </div>

                <ul className="space-y-3 my-6">
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Unlimited Sessions
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Instant Sharing
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Standard Backdrop
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Online Gallery
                  </li>
                </ul>

                <button className="w-full h-12 rounded-full bg-primary text-white font-bold">
                  Book This Booth
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndividualServicePage;
