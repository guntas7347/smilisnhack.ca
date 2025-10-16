import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Camera } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Smilisnhack - Professional Photobooth Services',
  description: 'Capture your special moments with Smilisnhack professional photobooth services',
};

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Camera className="w-8 h-8" />
            <span className="text-xl font-bold">Smilisnhack</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-gray-600 transition">Home</Link>
            <Link href="/gallery" className="hover:text-gray-600 transition">Gallery</Link>
            <Link href="/about" className="hover:text-gray-600 transition">About</Link>
            <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
          </div>
          <div className="md:hidden flex gap-4">
            <Link href="/gallery" className="text-sm hover:text-gray-600">Gallery</Link>
            <Link href="/contact" className="text-sm hover:text-gray-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6" />
              <span className="text-lg font-bold">Smilisnhack</span>
            </div>
            <p className="text-gray-400 text-sm">
              Capturing your special moments with professional photobooth services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>contact@smilisnhack.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Photo Street, NYC</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Smilisnhack. All rights reserved.</p>
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
      <body className={`${inter.className} ${playfair.variable}`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
