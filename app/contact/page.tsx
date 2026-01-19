import {
  MapPin,
  Store,
  Phone,
  Mail,
  Camera,
  ThumbsUp,
  Film,
  Calendar,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="flex-1 w-full px-4 md:px-10 lg:px-40 pb-8 md:pb-16 mx-auto max-w-[1440px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 pt-4">
          {/* HEADER */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-text-main dark:text-text-main-dark">
              Let's Get the <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold to-orange-400">
                Party Started!
              </span>
            </h1>
            <p className="text-base md:text-lg text-text-sub dark:text-text-sub-dark max-w-md leading-relaxed font-medium">
              Ready to capture unforgettable memories in Toronto? Drop us a
              line.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-soft border-4 border-white rotate-1 hover:rotate-0 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold">
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
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border shadow-sm">
              <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Location
                </p>
                <p className="font-bold text-xl">Toronto, ON</p>
                <p className="text-sm text-text-sub mt-1">
                  Serving the entire GTA
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border shadow-sm hover:-translate-y-1 transition-all"
                href="tel:+16474820256"
              >
                <div className="bg-gold/10 p-3 rounded-full text-amber-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Phone
                  </p>
                  <p className="font-bold">+1 (647) 482-0256</p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border shadow-sm hover:-translate-y-1 transition-all"
                href="mailto:smilinshack@gmail.com"
              >
                <div className="bg-gold/10 p-3 rounded-full text-amber-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Email
                  </p>
                  <p className="font-bold">smilinshack@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="pt-8 border-t">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
              Follow the Fun
            </h3>
            <div className="flex gap-4">
              {[Camera, ThumbsUp, Film].map((Icon, i) => (
                <a
                  key={i}
                  className="size-14 rounded-2xl bg-white border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="order-1 lg:order-2">
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-soft border sticky top-24">
            <div className="mb-8">
              <h2 className="text-3xl font-black mb-3">Send us a Message</h2>
              <p className="text-text-sub text-sm font-medium">
                We'll reply within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  className="h-14 px-5 rounded-2xl bg-input-light"
                  placeholder="First Name"
                />
                <input
                  className="h-14 px-5 rounded-2xl bg-input-light"
                  placeholder="Last Name"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                <input
                  className="h-14 pl-12 pr-5 w-full rounded-2xl bg-input-light"
                  placeholder="Email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <input
                    type="date"
                    className="h-14 pl-12 pr-5 w-full rounded-2xl bg-input-light"
                  />
                </div>

                <div className="relative">
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60 pointer-events-none" />
                  <select className="h-14 pl-5 pr-10 w-full rounded-2xl bg-input-light appearance-none">
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <textarea
                className="w-full rounded-2xl p-5 bg-input-light resize-none"
                rows={4}
                placeholder="Tell us about your event..."
              />

              <button
                type="button"
                className="w-full h-16 bg-gradient-to-r from-primary to-gold text-white text-lg font-black rounded-2xl flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
