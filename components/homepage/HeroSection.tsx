import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
