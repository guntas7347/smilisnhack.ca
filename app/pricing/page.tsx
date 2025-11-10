import Link from "next/link";
import { Check, Star, Sparkles, Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
  const packages = [
    {
      name: "Digital Delight Package",
      price: "$350",
      duration: "2 hours",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "2 Hours of Non-Stop Fun",
        "Unlimited Digital Photos",
        "Instant Sharing via Text or Email",
        "Custom Event Overlay",
        "Friendly On-Site Attendant",
        "Fun Props for Everyone",
        "Add an Extra Hour – Only $100",
      ],
      popular: false,
    },
    {
      name: "Print Magic Package",
      price: "$400",
      duration: "2 hours",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "2 Hours of Unlimited Prints & Digitals",
        "Custom Print Layout with Your Event Theme",
        "Instant Sharing via Text or Email",
        "Professional Attendant Included",
        "Tons of Fun Props",
        "Add an Extra Hour – $150",
      ],
      popular: true,
    },
    {
      name: "The Luxury Experience Package",
      price: "$550",
      duration: "3 hours",
      image:
        "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "3 Hours of Full Premium Service",
        "Unlimited Digital & Printed Photos",
        "Red Carpet Setup with LED Lighting",
        "VIP Stanchions for Elegant Presentation",
        "Custom Animated Overlay or Welcome Screen",
        "Two Professional Attendants",
        "Premium Props, Backdrop & Décor",
        "Instant Text/Email Sharing for Guests",
        "Add an Extra Hour – $150",
      ],
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Green Screen Magic",
      price: "$150",
      description: "Choose custom virtual backgrounds & effects",
    },
    {
      name: "Premium Photo Album",
      price: "$80",
      description: "Beautiful leather-bound keepsake of your event memories",
    },
    {
      name: "Instant Social Sharing",
      price: "$50",
      description: "Guests share photos instantly via social media or text",
    },
    {
      name: "Custom Branded Backdrop",
      price: "$120",
      description: "Personalized backdrop featuring your logo or theme",
    },
    {
      name: "Video Message Booth",
      price: "$100",
      description: "Let guests record personal video greetings and shoutouts",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 text-white overflow-hidden">
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
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the perfect package for your event. All packages include
            professional service and unlimited fun!
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-4 ring-blue-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    height={1000}
                    width={1000}
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
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-300"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
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
          <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
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
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Have a unique event or special requirements? We&rsquo;ll create
                a custom package tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Add-Ons
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your experience with these extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {addon.name}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
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
