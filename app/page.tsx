"use client";

import Link from "next/link";
import {
  Camera,
  Sparkles,
  Heart,
  Zap,
  Gift,
  Star,
  ArrowRight,
  Play,
  Maximize2,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://www.pexels.com/download/video/2022395/"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/60 to-slate-900/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl mb-8 border border-white/20 animate-bounce-in">
              <Sparkles className="w-5 h-5 text-blue-300 mr-2 animate-pulse-slow" />
              <span className="text-sm font-semibold text-white">
                Premium Photobooth Experience
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                Capture Every
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Magical Moment</span>
            </h1>

            <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
              Transform your events into unforgettable experiences with
              cutting-edge photobooth technology
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                Book Your Event
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Play className="mr-2 w-6 h-6 group-hover:scale-125 transition-transform" />
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-2 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
              Trusted By Industry Leaders
            </p>
          </div>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 px-8">
                  {[
                    "Canon",
                    "Sony",
                    "Nikon",
                    "Instagram",
                    "Snapchat",
                    "TikTok",
                    "Adobe",
                    "Apple",
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <span className="text-white font-bold text-2xl whitespace-nowrap">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Experience the future of event photography with our
              state-of-the-art equipment and features
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
                icon: Sparkles,
                title: "AI Enhancement",
                description: "Smart filters and real-time photo enhancements",
                gradient: "from-slate-600 to-blue-500",
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
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                Booking Process
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

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Recent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See the magic we create at every event
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2788316/pexels-photo-2788316.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((image, index) => (
              <div
                key={index}
                className="group aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link
              href="/gallery"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg group"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                event: "Wedding",
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
                text: "The 360° photobooth was the highlight of our wedding! Guests couldn't stop talking about it!",
              },
              {
                name: "Michael Chen",
                event: "Corporate Event",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
                text: "Professional service, incredible quality, and everyone loved the instant sharing feature!",
              },
              {
                name: "Emily Rodriguez",
                event: "Birthday Party",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
                text: "Best entertainment decision ever! The AI filters made every photo Instagram-ready!",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {review.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-medium">
                      {review.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex p-6 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-bounce-in">
            <Camera className="w-16 h-16" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Create
            <br />
            Unforgettable Memories?
          </h2>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Book your photobooth experience today and make your event the talk
            of the town
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-110 hover:-translate-y-2"
          >
            Get Started Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
