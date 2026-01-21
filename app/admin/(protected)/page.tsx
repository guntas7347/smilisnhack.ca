"use client";

import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Activity, DollarSign, Users, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Hello,{" "}
          <span className="font-semibold text-gray-800">
            {user?.email || "Admin"}
          </span>
          . Welcome back to SmilinShack CMS.
        </p>
      </div>

      {/* Stats Grid Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard title="Total Revenue" value="$0.00" icon={DollarSign} />
        <StatCard title="Active Quotes" value="0" icon={Activity} />
        <StatCard title="New Leads" value="0" icon={Users} />
        <StatCard title="Growth" value="0%" icon={TrendingUp} />
      </div>

      {/* Empty Content Area */}
      <div className="border border-dashed border-gray-300 rounded-xl bg-gray-50 h-96 flex flex-col items-center justify-center text-gray-400">
        <Activity size={48} className="mb-4 text-gray-300" />
        <p>No recent activity found.</p>
        <p className="text-sm">Select a menu item to manage content.</p>
      </div>
    </div>
  );
}

// Simple Helper Component for the Cards
function StatCard({ title, value, icon: Icon }: any) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Icon size={18} className="text-gray-400" />
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
