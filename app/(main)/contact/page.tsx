import QuoteForm from "@/components/QuoteForm";
import { MapPin, Store, Phone, Mail, Facebook, Instagram } from "lucide-react";

const ContactPage = () => {
  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/1GNgwKRVr9",
      label: "Facebook",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/smilinshack",
      label: "Instagram",
    },
  ];
  return (
    <main className="flex-1 w-full px-4 md:px-10 lg:px-40 pb-8 md:pb-16 mx-auto max-w-[1440px] dark:bg-background-dark transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 pt-4">
          {/* HEADER */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-text-primary dark:text-white">
              Let's Get the <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary">
                Party Started!
              </span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-md leading-relaxed font-medium">
              Ready to capture unforgettable memories in Toronto? Drop us a
              line.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark border border-white/40 dark:border-white/5 rotate-1 hover:rotate-0 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-flex items-center gap-2 bg-white/95 dark:bg-background-card-dark/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-text-primary dark:text-white border border-white/40 dark:border-white/10">
                <MapPin className="w-4 h-4 text-primary" />
                Toronto, ON
              </span>
            </div>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyhrhHBdbRS17DbyTevt6mSSYwvA5Bl5GmBARdzi8RCBktKaW-QppvYvF8YwxehoeXfrkLZOzqzlVgx6eZwY4DGAcbTrGY1qxvxAF8QDrMAh9jXSGLcyBjcvMbQTp5aUt9KinR_1AaW_weP3Y0mOQwXUnHic4XC5NC4YIOCDqOWNuLAv0GJ50RuuOnU26N86hsEfCdIeDrWZwCDdQhIOnvrI8mkqEEvyhOM4UWm-oJYMaPJjHEcy6FgfWF0v2Cab_Lf07C2_fx1I"
              alt="Friends in photo booth"
            />
          </div>

          {/* INFO CARDS */}
          <div className="flex flex-col gap-6 mt-4">
            {/* LOCATION */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark">
              <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Location
                </p>
                <p className="font-bold text-xl text-text-primary dark:text-white">
                  Toronto, ON
                </p>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
                  Serving the entire GTA
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark hover:-translate-y-1 transition-all"
                href="tel:+16474820256"
              >
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Phone
                  </p>
                  <p className="font-bold text-text-primary dark:text-white">
                    +1 (647) 482-0256
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark hover:-translate-y-1 transition-all"
                href="mailto:smilinshack@gmail.com"
              >
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Email
                  </p>
                  <p className="font-bold text-text-primary dark:text-white">
                    smilinshack@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="pt-8 border-t border-white/40 dark:border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-text-primary dark:text-white">
              Follow the Fun
            </h3>
            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-14 rounded-2xl bg-white dark:bg-background-card-dark border border-white/40 dark:border-white/5 shadow-card dark:shadow-card-dark flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </main>
  );
};

export default ContactPage;
