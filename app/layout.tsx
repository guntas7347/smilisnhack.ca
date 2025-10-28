import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  Camera,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smilinshack - Premium Photobooth Services",
  description:
    "Capture your special moments with Smilinshack photobooth services",
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-xl transform group-hover:rotate-12 transition-transform">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Smilinshack
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-300 transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-xl">
                <Camera className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Smilinshack</span>
            </div>
            <p className="text-blue-200 text-sm">
              Creating unforgettable memories, one snapshot at a time.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/pricing"
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@smilinshack.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2025 Smilinshack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
