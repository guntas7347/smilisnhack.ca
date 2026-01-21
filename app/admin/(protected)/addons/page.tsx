"use client";

import { useEffect, useState } from "react";
import { getAllAddons, Addon } from "@/lib/firebase/addons";
import Link from "next/link";
import {
  Plus,
  Package,
  Edit2,
  CheckCircle2,
  XCircle,
  Tag,
  Layers,
} from "lucide-react";

export default function AddonsTablePage() {
  const [items, setItems] = useState<Addon[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await getAllAddons();
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
            Service Addons
          </h1>
          <p className="text-gray-500 mt-1">
            Manage extra services and upsells for your quotes.
          </p>
        </div>

        <Link
          href="/admin/addons/edit"
          className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm"
        >
          <Plus size={18} />
          Create Addon
        </Link>
      </div>

      {/* --- Content Card --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Loading State */}
        {loading && items.length === 0 && (
          <div className="p-12 text-center text-gray-500 flex flex-col items-center">
            <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full mb-3" />
            <p>Loading addons...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <Package size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              No addons created
            </h3>
            <p className="text-gray-500 mt-1 mb-6">
              Start by adding optional services for your customers.
            </p>
            <Link
              href="/admin/addons/edit"
              className="text-indigo-600 font-medium hover:underline"
            >
              Create First Addon &rarr;
            </Link>
          </div>
        )}

        {/* Table */}
        {items.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">Addon Name</th>
                  <th className="px-6 py-4">Price Label</th>
                  <th className="px-6 py-4">Icon Identifier</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((a) => (
                  <tr
                    key={a.id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    {/* Title */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                          <Layers size={18} />
                        </div>
                        <span className="font-semibold text-gray-900">
                          {a.title}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Tag size={14} className="text-gray-400" />
                        <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800 text-xs">
                          {a.priceLabel}
                        </span>
                      </div>
                    </td>

                    {/* Icon String */}
                    <td className="px-6 py-4">
                      <code className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                        {a.icon || "default"}
                      </code>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      {a.active ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                          <CheckCircle2 size={12} /> Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                          <XCircle size={12} /> Inactive
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/addons/edit?slug=${a.id}`}
                        className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                        title="Edit Addon"
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
