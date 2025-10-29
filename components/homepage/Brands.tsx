import Image from "next/image";
import React from "react";

const Brands = () => {
  const brands = [
    { name: "Scotiabank", logo: "/logos/scotiabank.png" },
    { name: "RBC", logo: "/logos/rbc.png" },
    { name: "Toasteventspace", logo: "/logos/toasteventspace.png" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-x w-[150%]">
            {[...Array(2)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center justify-around gap-16 w-1/2 flex-shrink-0"
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Image
                      height={1000}
                      width={1000}
                      src={brand.logo}
                      alt={brand.name}
                      className="h-12 w-auto object-contain"
                    />
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
