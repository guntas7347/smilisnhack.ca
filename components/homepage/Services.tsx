import { Camera, Maximize2, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600">Perfect for every occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image:
                "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: Camera,
              title: "Classic Photobooth",
              description:
                "Traditional photobooth with instant prints and digital copies",
              features: ["4K Quality", "Instant Prints", "Custom Backdrops"],
            },
            {
              image:
                "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: Maximize2,
              title: "360° Photobooth",
              description:
                "Revolutionary 360-degree slow-motion video experience",
              features: ["Slow Motion", "360° View", "Social Ready"],
            },
            {
              image:
                "https://images.pexels.com/photos/1684231/pexels-photo-1684231.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: Sparkles,
              title: "Mirror Photobooth",
              description:
                "Interactive mirror-style photobooth with animations, touch features, and instant sharing",
              features: [
                "Touch Interaction",
                "Animated Prompts",
                "Instant Sharing",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/70 to-transparent flex flex-col justify-end p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-blue-100 mb-4 text-lg">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
