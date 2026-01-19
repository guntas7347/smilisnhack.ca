"use client";

import { useDarkMode } from "@/lib/hooks/dark";
import { ArrowRight, Camera, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { getMode, toggle } = useDarkMode();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <nav className="flex w-full max-w-[960px] items-center justify-between rounded-full bg-white/80 dark:bg-background-card-dark/60 px-6 py-3 shadow-soft dark:shadow-soft-dark backdrop-blur-xl border border-white/40 dark:border-white/5 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-20"
          />
          <span className="text-xl font-display font-bold tracking-tight hidden sm:block text-text-primary dark:text-white">
            SmilinShack
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle Dark Mode"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-white/5 text-text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-all border border-gray-100 dark:border-white/5 hover:shadow-md"
            id="theme-toggle"
            onClick={toggle}
          >
            <span className="material-symbols-outlined text-[20px]">
              {getMode() === "dark" ? <Moon /> : <Sun />}
            </span>
          </button>
          <button className="group flex h-10 items-center gap-2 rounded-full bg-primary text-white px-5 text-sm font-bold transition-all hover:bg-primary-hover shadow-lg shadow-pink-500/20">
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
