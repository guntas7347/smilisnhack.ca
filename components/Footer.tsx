import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  LocationEdit,
  Code,
} from "lucide-react";

const contactInfo = {
  phone: "+1 (647) 482-0256",
  email: "smilinshack@gmail.com",
  address: "Brampton, ON, Canada",
};

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/smilinshack",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/smilinshack",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/smilinshack",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="size-10"
                />
              </div>
              <span className="text-xl font-bold">SmilinShack</span>
            </div>
            <p className="text-blue-200 text-sm">
              Creating unforgettable memories, one snapshot at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Pricing", path: "/pricing" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block text-blue-200 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <LocationEdit className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <a href="https://guntassandhu.com/">Developer</a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2025 SmilinShack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
