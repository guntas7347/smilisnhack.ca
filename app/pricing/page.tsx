import Link from "next/link";
import { Check, Star, Sparkles, Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "$299",
      duration: "2 hours",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Professional photobooth setup",
        "Unlimited photo sessions",
        "Instant prints (4x6)",
        "Digital copies via email",
        "Fun props collection",
        "On-site attendant",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$499",
      duration: "4 hours",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Everything in Basic",
        "Custom photo templates",
        "Social media sharing",
        "Premium props & backdrops",
        "Photo guest book",
        "Online gallery access",
        "GIF & Boomerang options",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$799",
      duration: "Full day",
      image:
        "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Everything in Premium",
        "Red carpet setup",
        "Video messaging booth",
        "Green screen technology",
        "Custom branded prints",
        "Professional photographer",
        "Same-day highlight reel",
        "Premium album included",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Choose the perfect package for your event. All packages include
            professional service and unlimited fun!
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-4 ring-pink-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    height={1080}
                    width={1920}
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-300"
                        : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-600 via-rose-500 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <Camera className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Need a Custom Package?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Have a unique event or special requirements? We&rsquo;ll create
                a custom package tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Add-Ons
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your experience with these extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Extra Hour",
                price: "$100",
                description: "Extend your photobooth fun",
              },
              {
                name: "Green Screen",
                price: "$150",
                description: "Virtual backgrounds & effects",
              },
              {
                name: "Photo Album",
                price: "$80",
                description: "Premium leather-bound album",
              },
              {
                name: "Social Sharing",
                price: "$50",
                description: "Instant social media uploads",
              },
              {
                name: "Custom Backdrop",
                price: "$120",
                description: "Personalized branded backdrop",
              },
              {
                name: "Video Messages",
                price: "$100",
                description: "Record special video greetings",
              },
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {addon.name}
                  </h3>
                  <span className="text-2xl font-bold text-pink-600">
                    {addon.price}
                  </span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
