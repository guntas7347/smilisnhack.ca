"use client";

import { auth } from "@/lib/firebase/firebase";
import { logout } from "@/lib/firebase/auth";
import { onAuthStateChanged, User } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User2 } from "lucide-react";

export default function AdminNavbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
      {/* Left */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <strong className="font-semibold">SmilinShack CMS</strong>

        <div className="ml-5 flex gap-3">
          <Link href="/admin/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/admin/quotes" className="hover:underline">
            Quotes
          </Link>
          <Link href="/admin/services" className="hover:underline">
            Services
          </Link>{" "}
          <Link href="/admin/pricing" className="hover:underline">
            Pricing
          </Link>{" "}
          <Link href="/admin/addons" className="hover:underline">
            Addons
          </Link>
          <Link href="/admin/faqs" className="hover:underline">
            Faqs
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="flex gap-2 px-3 py-1 border border-gray-300 rounded">
          <User2 />
          <span className="text-sm text-gray-700">{user?.email}</span>
        </div>{" "}
        <button
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          onClick={async () => {
            await logout();
            window.location.href = "/admin/auth";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
