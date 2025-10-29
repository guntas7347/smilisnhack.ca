import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 rounded-xl transform group-hover:rotate-12 transition-transform">
              <Image
                src="/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="size-10"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              SmilinShack
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
