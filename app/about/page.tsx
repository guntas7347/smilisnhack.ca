import { Camera, Heart, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-pink-100"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Smilisnhack
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Creating unforgettable memories, one photo at a time
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Founded in 2018, Smilisnhack began with a simple mission: to bring
              joy and capture authentic moments at every event. What started as
              a passion project by two photography enthusiasts has grown into
              one of the most trusted photobooth services in the region.
            </p>
            <p>
              We believe that the best photos capture genuine emotions and
              spontaneous moments. Our photobooths are designed not just to take
              pictures, but to create an experience that brings people together,
              encourages laughter, and produces memories that last a lifetime.
            </p>
            <p>
              Over the years, we&rsquo;ve had the privilege of being part of
              hundreds of celebrations from intimate weddings to large corporate
              events, milestone birthdays to community festivals. Each event is
              unique, and we take pride in tailoring our services to match the
              vision and atmosphere of your special day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-16 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art cameras and printers ensure high-quality
                results every time
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passionate Team</h3>
              <p className="text-gray-600">
                Our dedicated team loves what they do and it shows in every
                event
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">500+ Events</h3>
              <p className="text-gray-600">
                Trusted by hundreds of satisfied clients for their special
                moments
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
              <p className="text-gray-600">
                Recognized for excellence in event photography services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold mb-16 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Alex Martinez</h3>
              <p className="text-gray-600 mb-4">Founder & Lead Photographer</p>
              <p className="text-sm text-gray-600">
                With over 10 years in photography, Alex brings creativity and
                precision to every event.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Jamie Wilson</h3>
              <p className="text-gray-600 mb-4">Co-Founder & Operations</p>
              <p className="text-sm text-gray-600">
                Jamie ensures every detail is perfect, from setup to the final
                print delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Sam Taylor</h3>
              <p className="text-gray-600 mb-4">Event Coordinator</p>
              <p className="text-sm text-gray-600">
                Sam&rsquo;s energy and enthusiasm create a fun atmosphere at
                every photobooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&rsquo;s Create Magic Together
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ready to make your event unforgettable? We&rsquo;d love to be part
            of your celebration.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
