import { ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
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
          Book your photobooth experience today and make your event the talk of
          the town
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
  );
};

export default Contact;
