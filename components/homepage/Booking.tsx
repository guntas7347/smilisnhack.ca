import { Camera, Gift, Heart, Sparkles } from "lucide-react";
import React from "react";

const Booking = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Services Process
            </span>
          </h2>
          <p className="text-xl text-gray-600">Get started in 4 easy steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {[
            {
              step: "01",
              icon: Camera,
              title: "Select Package",
              description: "Choose the perfect plan for your event",
            },
            {
              step: "02",
              icon: Gift,
              title: "Customize",
              description: "Pick props, backdrops, and themes",
            },
            {
              step: "03",
              icon: Heart,
              title: "Book Date",
              description: "Reserve your preferred date and time",
            },
            {
              step: "04",
              icon: Sparkles,
              title: "Enjoy",
              description: "We handle everything on event day",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center relative">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-3xl font-bold mb-6 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
                  {step.step}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="inline-flex p-4 bg-blue-50 rounded-xl mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-blue-300 to-cyan-300 -z-10 animate-pulse-slow"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
