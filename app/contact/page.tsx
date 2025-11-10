import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const contactInfo = {
  phone: "+1 (647) 482-0256",
  email: "smilinshack@gmail.com",
  address: "Brampton, ON, Canada",
};

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/smilinshack" },
  { icon: Facebook, url: "https://www.facebook.com/share/1AGQjAqxWR" },
  { icon: Twitter, url: "https://twitter.com" },
];

export default function Contact() {
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      content: contactInfo.phone,
      subtext: "Mon-Fri 9am-6pm",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: contactInfo.email,
      subtext: "We reply within 24 hours",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      content: contactInfo.address,
      subtext: "We serve all of Ontario",
      gradient: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let’s make your event unforgettable. Contact us today for a free
            consultation!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactCards.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${contact.gradient} mb-4`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">
                  {contact.content}
                </p>
                <p className="text-sm text-gray-600">{contact.subtext}</p>
              </div>
            ))}
          </div>

          {/* Contact Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Book Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Event
                </span>
              </h2>
              <ContactForm />
            </div>

            <div>
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-blue-100 last:border-0"
                    >
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-gray-700 font-medium">
                          {schedule.day}
                        </span>
                      </div>
                      <span className="text-blue-600 font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-blue-100 mb-6">
                  Stay connected for the latest updates, photos, and special
                  offers!
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
