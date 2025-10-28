import React from "react";

const Brands = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                {[
                  "Canon",
                  "Sony",
                  "Nikon",
                  "Instagram",
                  "Snapchat",
                  "TikTok",
                  "Adobe",
                  "Apple",
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <span className="text-white font-bold text-2xl whitespace-nowrap">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
