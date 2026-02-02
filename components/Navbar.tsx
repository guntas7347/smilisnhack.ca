"use client";

import { useState } from "react";
import { useDarkMode } from "@/lib/hooks/dark";
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsApp } from "./Svg";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { mode, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);

  const handleWhatsAppText = () => {
    const phoneNumber = "16474820256";
    const message = "Hello, I want to make an enquiry!";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <nav className="relative flex w-full max-w-[960px] items-center justify-between rounded-full bg-white/80 dark:bg-background-card-dark/60 px-6 py-3 shadow-soft dark:shadow-soft-dark backdrop-blur-xl border border-white/40 dark:border-white/5 transition-all duration-300">
        {/* Logo */}
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

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-white/5 text-text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-all border border-gray-100 dark:border-white/5 hover:shadow-md"
            onClick={handleWhatsAppText}
          >
            <WhatsApp />
          </button>{" "}
          <button
            aria-label="Toggle Dark Mode"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-white/5 text-text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-all border border-gray-100 dark:border-white/5 hover:shadow-md"
            onClick={toggle}
          >
            {mode === "dark" ? <Moon /> : <Sun />}
          </button>
          <Link
            href="/contact"
            className="hidden sm:flex group h-10 items-center gap-2 rounded-full bg-primary text-white px-5 text-sm font-bold transition-all hover:bg-primary-hover shadow-lg shadow-pink-500/20"
          >
            <span>Book Now</span>
            <span className="text-[18px] transition-transform group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-3 md:hidden rounded-3xl bg-white/95 dark:bg-background-card-dark/95 backdrop-blur-xl border border-white/40 dark:border-white/5 shadow-soft dark:shadow-soft-dark overflow-hidden">
            <div className="flex flex-col divide-y divide-black/5 dark:divide-white/5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm font-bold text-primary"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
