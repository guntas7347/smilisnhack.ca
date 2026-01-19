const IndividualServicePage = () => {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-7xl px-4 md:px-10 lg:px-16 pb-20">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 py-6 px-2">
          <a
            className="text-primary/70 hover:text-primary transition-colors text-sm font-medium"
            href="#"
          >
            Services
          </a>
          <span className="text-primary/70 text-sm font-medium">/</span>
          <span className="dark:text-white text-slate-900 text-sm font-medium">
            The Glam Booth
          </span>
        </div>
        {/* Hero Section */}
        <div className="@container">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center py-6">
            {/* Content */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent-gold/10 px-3 py-1 text-accent-gold border border-accent-gold/20">
                  <span className="material-symbols-outlined text-[16px]">
                    stars
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Most Popular Choice
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight dark:text-white text-slate-900">
                  The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400">
                    Glam
                  </span>{" "}
                  Booth
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Hollywood style black &amp; white photos that make everyone
                  look flawless. The perfect addition to elevate your wedding or
                  corporate event with a touch of celebrity elegance.
                </p>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-accent-gold">
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                </div>
                <span className="text-sm font-semibold dark:text-slate-400 text-slate-500">
                  (120+ Events)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all">
                  Check Availability
                </button>
                <button className="flex items-center justify-center rounded-full h-12 px-8 bg-surface-highlight text-white text-base font-bold hover:bg-surface-highlight/80 transition-all">
                  View Gallery
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2 relative group">
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-dark shadow-2xl">
                <img
                  alt="Black and white glamorous portrait of a smiling woman in a photo booth"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPyabNmOTCZNSPfNgfWUF6ebQxEMT6I6t42yRqCAd9DyF2WG-a4DLVQiGCzdBkd1WHdqmugMSkorrDjkKap-YQRsH30I7j_nf-kkrZEzXpzhITceTS8nv2FQbcPWfTtswgAJWOz5s50ss0twhKFkm0qzts_wFHXwNA_9_36Cbr_VIjWoXDKy3ml697VHiij6BGAdb6KHF1vgiF_z5z4thoI_afVKlgQlaDC66C135MDRyrt5a4P3cqEBqU77FeDPBJBbpsJrGKCoA"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium text-sm">
                      Real Client Photo
                    </span>
                    <span className="material-symbols-outlined text-white/80">
                      photo_camera
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chips / Features */}
        <div className="flex gap-3 py-8 flex-wrap">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-highlight pl-3 pr-5 border border-white/5">
            <span className="material-symbols-outlined text-primary text-[20px]">
              photo_camera
            </span>
            <p className="text-white text-sm font-medium">DSLR Quality</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-highlight pl-3 pr-5 border border-white/5">
            <span className="material-symbols-outlined text-primary text-[20px]">
              auto_fix_high
            </span>
            <p className="text-white text-sm font-medium">Skin Smoothing</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-highlight pl-3 pr-5 border border-white/5">
            <span className="material-symbols-outlined text-primary text-[20px]">
              share
            </span>
            <p className="text-white text-sm font-medium">Instant Sharing</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-highlight pl-3 pr-5 border border-white/5">
            <span className="material-symbols-outlined text-primary text-[20px]">
              print
            </span>
            <p className="text-white text-sm font-medium">Unlimited Prints</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-highlight pl-3 pr-5 border border-white/5">
            <span className="material-symbols-outlined text-accent-gold text-[20px]">
              workspace_premium
            </span>
            <p className="text-white text-sm font-medium">Premium Backdrop</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 mt-8">
          {/* LEFT COLUMN: Details & Gallery */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-bold leading-tight tracking-tight px-1 pb-6 dark:text-white text-slate-900 border-b border-surface-highlight/50 mb-6">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-sm">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      filter_b_and_w
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white text-slate-900">
                      The "Kardashian" Filter
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Our signature black and white beauty filter that smooths
                      skin and enhances contrast.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-sm">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      print
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white text-slate-900">
                      4x6 Prints
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Large, frame-worthy prints for every guest in the session.
                      No tiny strips here.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-sm">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      palette
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white text-slate-900">
                      Custom Design
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      We design a custom print overlay to match your wedding
                      invitation or event branding.
                    </p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-sm">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      person
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white text-slate-900">
                      Professional Attendant
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      A friendly expert to assist guests, manage the line, and
                      ensure perfect lighting.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold leading-tight tracking-tight px-1 pb-6 dark:text-white text-slate-900 border-b border-surface-highlight/50 mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96 md:h-[500px]">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="Black and white photo of a couple laughing in a photo booth"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZiYz-Na90h6-PW7XuptX40fmPSiTfgy5HbBTVexFtbjSMUXF-2c2K1cRGDfzr-yqjy7SC8wWqzUPXh6sNjqSCjNhv8rfm3XIh06Ke6UQ51tynVMPIJqMo1_0T9msjXrJSkErwJV0n6LEYqktN1xKYsHQOexQZvXYpa5MaL62sZ3dgQncBHrt7nsl-Gf9LwcSSdPR8rBHwvAm4bILrVVduoaUPNCvw1I07jRriPu-jyedbTuUar3UdbnyR85RG_yvcHqDSGDUHNzQ"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="Group of friends celebrating with champagne"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNc8CJUYPj7UeU8GeF__Sf5WPljV4v7m6gczGdoO_aXuocGnqbX-ivZesfRItu95q1YHJYZlXRsciJVrevJfU3o_S1Sthywyh5G0VqtNcUsJTORytcmGIyMFFMVIc5doQyJRcySwgAnt0RkmUgamX86ueecncZJqFKN0X1XG3ahON-x1Wuc-c_p8DFwBwEQvlqWR9CD5wpOL-7-6rgPRTUEGOhf_p8g_kTvL2APrFiCXxSiiEMXBs_KcGbp5QGVE96t2Rz-AnGlos"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="Elegant wedding guests posing with props"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqUe5ijiPsFC3lRkhEFXNizCor9lWjtA0PIcEufJsUfYawm9GbzdIih-Y3V50J2_mJGIvrQqK91oXblTUmDwU5nuHfif1kNQ4sLEQWtzvlAYASN3sgFvYpqt03qhGzsbiiK48JFnYUFZkQVPNbzBrJu4mFR5s-tXrxvgfqCWANmguufDQaJLnaQmTh0G-cZkPs_rc1OCgTKBulE-N_ZM_VoScqnYfC7lCRRdv7P3yRVieIUl3DFwjiFzFCXtcUmr6UmXS8hQA90k"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="text-sm font-bold text-primary hover:text-white border border-primary hover:bg-primary px-6 py-2 rounded-full transition-colors">
                  View Full Portfolio
                </button>
              </div>
            </section>
            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold leading-tight tracking-tight px-1 pb-6 dark:text-white text-slate-900 border-b border-surface-highlight/50 mb-6">
                Requirements
              </h2>
              <div className="space-y-4">
                <details className="group rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-medium dark:text-white text-slate-900">
                    <span>Space Needed</span>
                    <span className="transition-transform group-open:rotate-180 material-symbols-outlined">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-slate-500 dark:text-slate-400">
                    We recommend an 8x8 foot space to allow for the backdrop,
                    lighting equipment, and a comfortable distance for guests to
                    pose.
                  </div>
                </details>
                <details className="group rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-medium dark:text-white text-slate-900">
                    <span>Power Requirements</span>
                    <span className="transition-transform group-open:rotate-180 material-symbols-outlined">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-slate-500 dark:text-slate-400">
                    We require a standard 120V outlet within 25 feet of the
                    setup area. We bring our own extension cords and safety
                    tape.
                  </div>
                </details>
              </div>
            </section>
          </div>
          {/* RIGHT COLUMN: Pricing & CTA (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Pricing Card */}
              <div className="rounded-2xl overflow-hidden bg-surface-dark border border-primary/30 shadow-2xl relative">
                {/* Golden Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 blur-[50px] rounded-full" />
                <div className="p-6 md:p-8">
                  <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Starting Package
                  </div>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-bold text-white">$650</span>
                    <span className="text-slate-400">/ 3 hours</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    Perfect for weddings and medium-sized parties. Additional
                    hours available at{" "}
                    <span className="text-accent-gold font-bold">$150/hr</span>.
                  </p>
                  <div className="my-6 border-t border-white/10" />
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      Unlimited Photo Sessions
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      Instant Text &amp; Email Sharing
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      Standard White Backdrop
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      Online Gallery Access
                    </li>
                  </ul>
                  <button className="w-full flex items-center justify-center rounded-full h-12 bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                    Book This Booth
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    No payment required to inquire
                  </p>
                </div>
              </div>
              {/* Testimonial Mini Card */}
              <div className="rounded-2xl p-6 bg-surface-highlight/30 border border-white/5 backdrop-blur-sm">
                <div className="flex gap-1 text-accent-gold mb-3">
                  <span className="material-symbols-outlined fill-current text-[16px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[16px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[16px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[16px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill-current text-[16px]">
                    star
                  </span>
                </div>
                <p className="text-sm italic text-slate-300 mb-4">
                  "The Glam Booth was the absolute highlight of our reception!
                  Everyone looked like movie stars."
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-accent-gold flex items-center justify-center text-surface-dark font-bold text-xs">
                    SJ
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      Sarah Jenkins
                    </p>
                    <p className="text-[10px] text-slate-400">Toronto, ON</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndividualServicePage;
