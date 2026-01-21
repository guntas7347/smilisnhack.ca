"use client";

import { auth } from "@/lib/firebase/firebase";
import { logout } from "@/lib/firebase/auth";
import { onAuthStateChanged, User } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this for active states
import { useEffect, useState } from "react";
import {
  User2,
  LogOut,
  LayoutDashboard,
  FileText,
  Quote,
  Layers,
  CreditCard,
  Puzzle,
  HelpCircle,
} from "lucide-react";

// Configuration for links to keep JSX clean
const navLinks = [
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Quotes", href: "/admin/quotes", icon: Quote },
  { name: "Services", href: "/admin/services", icon: Layers },
  { name: "Pricing", href: "/admin/pricing", icon: CreditCard },
  { name: "Addons", href: "/admin/addons", icon: Puzzle },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
];

export default function AdminNavbar() {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* --- Left Side: Logo & Navigation --- */}
          <div className="flex items-center gap-8">
            {/* Logo Area */}
            <Link href="/admin" className="flex items-center gap-2 group">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-bold text-lg text-slate-800 tracking-tight">
                SmilinShack <span className="text-indigo-600">CMS</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className={
                        isActive ? "text-indigo-600" : "text-slate-400"
                      }
                    />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* --- Right Side: User Profile & Actions --- */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <User2 size={16} className="text-indigo-600" />
                </div>
                <span className="text-xs font-medium text-slate-700 max-w-[150px] truncate">
                  {user.email}
                </span>
              </div>
            )}

            <button
              onClick={async () => {
                const ask = confirm("Logout?");
                if (!ask) return;
                await logout();
                window.location.href = "/admin/auth";
              }}
              className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
              title="Sign out"
            >
              <LogOut
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
