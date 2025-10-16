import { Camera, Star, Users, Gift, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Capture Every Smile
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Professional photobooth experiences for your special moments
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Book Your Event
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Choose Package</h3>
              <p className="text-gray-600">
                Select the perfect package for your event from our flexible
                options
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Book Date</h3>
              <p className="text-gray-600">
                Reserve your preferred date and we&rsquo;ll handle all the setup
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Enjoy Memories</h3>
              <p className="text-gray-600">
                Let your guests create unforgettable moments and instant prints
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Packages
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Perfect options for every occasion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <p className="text-4xl font-bold mb-6">$299</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>2 hours of service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Unlimited prints</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Digital copies included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Props & backdrops</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Choose Plan
              </Link>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl p-8 shadow-xl transform md:scale-105">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold mb-6">$499</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>4 hours of service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Unlimited prints</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Custom photo templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Premium props & backdrops</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Online gallery</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-white text-rose-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Choose Plan
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">Deluxe</h3>
              <p className="text-4xl font-bold mb-6">$799</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Full day service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Video booth option</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>GIF & Boomerang</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Social media sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Photo album</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &rdquo;Absolutely amazing service! The photobooth was the
                highlight of our wedding. All our guests loved it and we have
                incredible memories to look back on.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Wedding Reception</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &rdquo;Professional, fun, and so easy to work with! The team
                arrived early, set up quickly, and everyone had a blast. Highly
                recommend for any event!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-600">Corporate Event</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &rdquo;Best decision we made for our party! The quality of
                prints was excellent and the props were so much fun. Will
                definitely book again!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Birthday Party</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Google Reviews
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See what our clients are saying
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <div>
                  <p className="font-semibold">Jennifer Lee</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                &rdquo;Fantastic experience from start to finish! The team was
                professional and the photobooth was a huge hit at our
                event.&rdquo;
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                <div>
                  <p className="font-semibold">David Thompson</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                &rdquo;Excellent service and great quality photos! Everyone
                loved the booth and we got amazing pictures. Worth every
                penny!&rdquo;
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold">4.9/5.0</p>
            <p className="text-gray-600">Based on 150+ Google Reviews</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Make Memories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your photobooth experience today and let us capture your
            special moments
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
