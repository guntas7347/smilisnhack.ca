import { Camera, Heart, Users, Award, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Smilinshack
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Creating unforgettable memories, one smile at a time, since 2015
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Where Every{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Moment Matters
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Smilinshack was born from a simple belief: every celebration
                deserves to be captured in the most fun and memorable way
                possible. What started as a small venture with one photobooth
                has grown into a premier event services company.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We&rsquo;ve had the privilege of being part of thousands of
                celebrations, from intimate gatherings to grand affairs. Each
                event is unique, and we take pride in customizing our services
                to match your vision perfectly.
              </p>
              <p className="text-lg text-gray-600">
                Our team is passionate about creating experiences that bring
                people together, spark joy, and leave lasting impressions. We
                don&rsquo;t just provide photobooths—we create memories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                height={1080}
                width={1920}
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team"
                className="rounded-2xl shadow-lg aspect-square object-cover"
              />
              <Image
                height={1080}
                width={1920}
                src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Event"
                className="rounded-2xl shadow-lg aspect-square object-cover mt-8"
              />
              <Image
                height={1080}
                width={1920}
                src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Setup"
                className="rounded-2xl shadow-lg aspect-square object-cover -mt-8"
              />
              <Image
                height={1080}
                width={1920}
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fun"
                className="rounded-2xl shadow-lg aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We love what we do and it shows in every event we serve",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Building lasting relationships with our clients and partners",
                gradient: "from-rose-500 to-pink-600",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Delivering premium quality and unforgettable experiences",
                gradient: "from-pink-600 to-rose-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.gradient} mb-6`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              By The{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Events" },
              { number: "50K+", label: "Photos Captured" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              The amazing people behind the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & CEO",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Jessica Lee",
                role: "Operations Director",
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Marcus Johnson",
                role: "Lead Photographer",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Sophia Chen",
                role: "Event Coordinator",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    height={1080}
                    width={1920}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 text-pink-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our{" "}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We&rsquo;d love to be part of your special moments. Let&rsquo;s
            create something amazing together!
          </p>
        </div>
      </section>
    </div>
  );
}
