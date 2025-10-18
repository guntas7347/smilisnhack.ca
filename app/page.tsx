"use client";

import Link from "next/link";
import {
  Camera,
  Sparkles,
  Heart,
  Zap,
  Gift,
  Users,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-white">
          <div className="absolute inset-0 opacity-20">
            <Image
              height={1080}
              width={1920}
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Party background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Premium Photobooth Experience
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Capture Every Smile,
              </span>
              <br />
              <span className="text-gray-900">Create Lasting Memories</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Transform your events into unforgettable experiences with our
              state-of-the-art photobooth services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-300 transition-all transform hover:scale-105"
              >
                Book Your Event
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105"
              >
                <Play className="mr-2 w-5 h-5" />
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Smilinshack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring joy, creativity, and professional quality to every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "HD Quality",
                description: "Professional 4K cameras for crystal-clear photos",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Instant Prints",
                description: "Get your photos printed in seconds",
                gradient: "from-rose-500 to-pink-600",
              },
              {
                icon: Gift,
                title: "Custom Props",
                description: "Hundreds of fun props and backdrops",
                gradient: "from-pink-600 to-rose-600",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Friendly staff to assist your guests",
                gradient: "from-rose-600 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-pink-100"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600">Perfect for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Weddings",
                description: "Make your special day even more memorable",
              },
              {
                image:
                  "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Corporate Events",
                description: "Engage your team and clients with fun",
              },
              {
                image:
                  "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Birthdays",
                description: "Celebrate life with unforgettable moments",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    height={1000}
                    width={1920}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-pink-200">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to amazing memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Camera,
                title: "Book Online",
                description: "Choose your package and date",
              },
              {
                step: "02",
                icon: Gift,
                title: "Customize",
                description: "Select props and themes",
              },
              {
                step: "03",
                icon: Heart,
                title: "Celebrate",
                description: "Enjoy your event with guests",
              },
              {
                step: "04",
                icon: Sparkles,
                title: "Cherish",
                description: "Get digital and printed photos",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.step}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <step.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">See the magic we create</p>
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
                className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <Image
                  height={1000}
                  width={1920}
                  src={image}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Say
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
                text: "Absolutely amazing! Our wedding guests loved the photobooth. The quality of photos was outstanding!",
              },
              {
                name: "Michael Chen",
                event: "Corporate Event",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
                text: "Professional, fun, and perfect for our company party. Highly recommend Smilinshack!",
              },
              {
                name: "Emily Rodriguez",
                event: "Birthday Party",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
                text: "Made my daughter's sweet 16 so special. Everyone had a blast with the props and instant prints!",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &rdquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    height={1000}
                    width={1920}
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-pink-600">{review.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-600 text-white relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Memories?
          </h2>
          <p className="text-xl mb-10 text-pink-100">
            Book your photobooth experience today and make your event
            unforgettable
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
