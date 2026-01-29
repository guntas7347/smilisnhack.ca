"use client";

import { useState } from "react";
import { useDarkMode } from "@/lib/hooks/dark";
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <svg
              className="p-1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                fill="currentColor"
              />
            </svg>
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
