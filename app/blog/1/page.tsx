const IndividualBlogPage = () => {
  return (
    <main className="flex-grow">
      <div className="flex flex-col items-center px-4 md:px-10 py-8 md:py-12">
        {/* Blog Article Container */}
        <article className="w-full max-w-[800px] flex flex-col gap-8">
          {/* Article Header */}
          <header className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20 text-xs font-bold uppercase tracking-wider">
                Wedding Tips
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm font-medium">
                5 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              5 Reasons Why a Photo Booth is Essential for Your Toronto Wedding
            </h1>
            {/* Author */}
            <div className="flex items-center gap-4 py-2">
              <div className="size-12 rounded-full bg-gray-700 overflow-hidden ring-2 ring-primary/50 p-0.5">
                <img
                  alt="Portrait of Sarah Jenkins smiling warmly"
                  className="w-full h-full rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHhOK_xLy-10olwOExaOFDF8chCuzW5hV2kP5NC8SvvUg5UYbJO-eQtGqDVbK2opU8_ewDaBHILk4yeZLd21R1ejQU8vvj-f9ug0Y9HR_sFYXF2_m2BNICgpw3AqQiyuvNYYcxA6k914lFbQ0IaTs--UmWskfmxFURn4iV1oTL4KJFMga9hYEfsACQZHNbXbHk9bshvxjfAjzZ1zVT-gzcSD6emyHD3VL4NXvjKUSQdHOAlSZyvu3IDkZ2tKZet379zFtXDLxzdAc"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  Sarah Jenkins
                </span>
                <span className="text-sm text-primary">
                  Wedding Expert • Oct 24, 2023
                </span>
              </div>
            </div>
          </header>
          {/* Featured Image */}
          <div className="w-full aspect-video md:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-60 z-10" />
            <img
              alt="A happy couple laughing holding photo booth props at a wedding reception with warm lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXOJWVYlOq5zDJ6VX5Td9uha99XZwQYR2_I9CRCfEdjg7PhRukJ_a_12kutSrvkELx_nsf8C1Xuncrw979hURLwXe9hxF8SQrVTLdC5KhMC0weUf7WxmzLYM8_91Q4cEu_tEjjU3SwNnnsofEjB4Z0ZVyKeXbrMmjlRIB2mLbWBwOnCEFgioa6N31T13MfLSzp3zdlJJwf2b4gBBzqXrgaMETKzwubxVkWgwe0_Bmtj_4ucL62_w_xBXIGXoPI0E5bVy_SNDwhWeE"
            />
            {/* Image Credit/Caption Overlay */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white/80 text-xs">
              <span className="material-symbols-outlined text-sm">
                camera_alt
              </span>
              <span>Captured at The Great Hall, Toronto</span>
            </div>
          </div>
          {/* Body Content */}
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="font-medium text-xl text-gray-900 dark:text-white leading-relaxed">
              Capturing memories is the heart of every wedding. While a
              photographer captures the big moments, a photo booth captures the
              fun, candid, and often hilarious moments between your guests that
              might otherwise be missed.
            </p>
            <p>
              We've seen it time and time again at SmilinShack events across the
              GTA. The moment the music starts and the booth opens, the energy
              in the room shifts. It’s not just a camera in a corner; it’s an
              experience generator.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-accent-gold">
              1. Ice Breaker for Guests
            </h2>
            <p>
              Weddings bring together people from all walks of your life—work
              friends, distant cousins, college roommates. A photo booth acts as
              a natural gathering point. There's something about putting on a
              silly oversized pair of glasses that instantly dissolves social
              barriers.
            </p>
            {/* Quote Block */}
            <blockquote className="my-6 border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl italic text-gray-800 dark:text-gray-200">
              "The photo booth was the highlight of the reception! Our guests
              from both sides of the family were mingling and laughing together
              within minutes."
              <footer className="mt-2 text-sm font-bold text-primary not-italic">
                — Jessica &amp; Mark, married June 2023
              </footer>
            </blockquote>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-accent-gold">
              2. Unique Guest Favors
            </h2>
            <p>
              Forget the sugared almonds that get left on the table. A
              high-quality photo strip is a keepsake your guests will actually
              keep on their fridge for years. At SmilinShack, we offer unlimited
              prints, meaning everyone in the photo gets a copy.
            </p>
            {/* Inline Image Gallery */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-dark">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  data-alt="Close up of a classic 3-frame photo booth strip with black and white photos"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGrHBtrSn8xmWFN6OfobaSjxk7X4b_EaQuRDS0u5KO1EFk3wfkio8hfbo9oZcjazCfmdLfr6qACOG5kY_tMFa9-G8dtZ-TdZ1t2Dic1bEOsbN_TpxT2BBggZMYsZYo0p2SVnBEzjKHKNE6lAdRXZRhzqKEBqxp60YwXNyWIVAxMihpOjKJ19tRY9_JKwAmKM4q-heVVeVxvguaIxCGhjD8r9vBEyCWhQM-9Gh1s08yn9tWzzzkG6r-lye85cAsun_NGxIvHghpKEc"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-dark">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  data-alt="A group of friends making funny faces wearing colorful wigs and sunglasses"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3C2bpj3tK8adAeF382e0RLzEU6hUblq8e6txGAY04Luxmoz2aOikh-tK26G_zNDxBcomh9_ZGnY0_iupYLKhxU0awZJxCxZPg6NN-E3-H6POCxpueJPdv1eGoBltr69WFBBJwI11R_TwGNdF42vojUoG8KCFsDZBOOvoS25-tOm_h9qt97eL2YVjoPJ1gNb89IKU5O_TSKns54orLuYLspXHnxWuBsZshDkqgJMfHZTCzpKHq3iZKuKldzbD2d0utzaz5020YeUw"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-accent-gold">
              3. Entertainment for Non-Dancers
            </h2>
            <p>
              Not everyone loves the dance floor. A photo booth provides an
              alternative form of entertainment for guests who want to take a
              break from dancing or prefer a different kind of fun. It keeps the
              energy high throughout the entire venue, ensuring no one feels
              left out of the celebration.
            </p>
            <div className="bg-surface-dark p-6 rounded-2xl border border-[#48232c] mt-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold">
                  lightbulb
                </span>
                <div>
                  <h4 className="text-accent-gold font-bold mb-1">Pro Tip</h4>
                  <p className="text-sm">
                    Place your photo booth near the bar or the dance floor to
                    ensure maximum visibility and traffic!
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-accent-gold">
              4. High-Quality Digital Memories
            </h2>
            <p>
              While the prints are fun, the digital gallery you receive
              afterwards is priceless. You get to see your wedding from your
              guests' perspective. These candid shots often end up being some of
              the couple's favorites because they capture the raw, unscripted
              joy of the night.
            </p>
            <p className="mt-4">
              Ready to elevate your Toronto wedding experience? Don't let these
              moments slip away.
            </p>
          </div>
          {/* Share Section */}
          <div className="border-t border-[#48232c] mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-bold text-lg dark:text-white">
              Share this article:
            </span>
            <div className="flex gap-3">
              <button className="size-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-sm font-bold">FB</span>
              </button>
              <button className="size-12 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-sm font-bold">TW</span>
              </button>
              <button className="size-12 rounded-full bg-pink-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-sm font-bold">IG</span>
              </button>
              <button className="size-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-sm">link</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default IndividualBlogPage;
