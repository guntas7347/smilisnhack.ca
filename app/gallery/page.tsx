export default function Gallery() {
  const images = [
    {
      url: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg",
      tall: true,
    },
    {
      url: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      tall: true,
    },
    {
      url: "https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
      tall: true,
    },
    {
      url: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      tall: false,
    },
    {
      url: "https://images.pexels.com/photos/3049411/pexels-photo-3049411.jpeg",
      tall: true,
    },
    {
      url: "https://images.pexels.com/photos/8828424/pexels-photo-8828424.jpeg",
      tall: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore moments we&rsquo;ve captured at weddings, parties, and
            corporate events
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.url}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Want to See Your Event Here?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us capture the magic of your special moments
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Book Your Event
          </a>
        </div>
      </section>
    </div>
  );
}
