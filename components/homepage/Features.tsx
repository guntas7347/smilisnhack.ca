import { Camera, Maximize2, Printer, Sparkles, Zap } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-6 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Advanced Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cutting-Edge{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Booth Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of event photography with our state-of-the-art
            equipment and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Camera,
              title: "Classic Photobooth",
              description:
                "Professional 4K cameras with studio-quality lighting",
              gradient: "from-blue-500 to-cyan-500",
              delay: "0s",
            },
            {
              icon: Maximize2,
              title: "360° Photobooth",
              description: "Capture stunning 360-degree slow-motion videos",
              gradient: "from-cyan-500 to-blue-600",
              delay: "0.1s",
            },
            {
              icon: Zap,
              title: "Instant Sharing",
              description: "Share photos instantly to social media platforms",
              gradient: "from-blue-600 to-slate-600",
              delay: "0.2s",
            },
            {
              icon: Printer,
              title: "Instant Prints",
              description:
                "High-quality photo prints delivered instantly on-site",
              gradient: "from-slate-600 to-blue-700",
              delay: "0.3s",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-4 border border-blue-100 animate-fade-in-up"
              style={{ animationDelay: feature.delay }}
            >
              <div
                className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
