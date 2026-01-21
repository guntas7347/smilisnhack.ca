"use client";

import { useEffect, useState } from "react";
import { getAllPricing, PricingPackage } from "@/lib/firebase/pricing";
import Link from "next/link";
import {
  Plus,
  CreditCard,
  Edit2,
  Check,
  DollarSign,
  ListChecks,
} from "lucide-react";

export default function PricingTablePage() {
  const [items, setItems] = useState<PricingPackage[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await getAllPricing();
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* --- Page Header --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Pricing Packages
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your service tiers and subscription options.
          </p>
        </div>

        <Link
          href="/admin/pricing/edit"
          className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm"
        >
          <Plus size={18} />
          Create Package
        </Link>
      </div>

      {/* --- Content Card --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Loading State */}
        {loading && items.length === 0 && (
          <div className="p-12 text-center text-gray-500 flex flex-col items-center">
            <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full mb-3" />
            <p>Loading packages...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <CreditCard size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              No pricing packages
            </h3>
            <p className="text-gray-500 mt-1 mb-6">
              Create tiers to display on your pricing page.
            </p>
            <Link
              href="/admin/pricing/edit"
              className="text-indigo-600 font-medium hover:underline"
            >
              Create First Package &rarr;
            </Link>
          </div>
        )}

        {/* Table */}
        {items.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">Package Name</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Features Included</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    {/* Title */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                          <CreditCard size={18} />
                        </div>
                        <span className="font-semibold text-gray-900">
                          {p.title}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-900 font-bold">
                        <DollarSign size={16} className="text-gray-400" />
                        <span>{p.price}</span>
                      </div>
                    </td>

                    {/* Features Count */}
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                        <ListChecks size={14} />
                        {p.features?.length || 0} Features
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/pricing/edit?slug=${p.id}`}
                        className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                        title="Edit Package"
                      >
                        <Edit2 size={18} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
