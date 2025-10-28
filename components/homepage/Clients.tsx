import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
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
                &rdquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center">
                <Image
                  height={1000}
                  width={1000}
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
  );
};

export default Clients;
