"use client";

import { useEffect, useState } from "react";
import { getAllPricing, PricingPackage } from "@/lib/firebase/pricing";

export default function PricingTablePage() {
  const [items, setItems] = useState<PricingPackage[]>([]);

  async function load() {
    const data = await getAllPricing();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pricing Packages</h1>
        <a href="/admin/pricing/edit" className="border px-4 py-2 rounded">
          New Package
        </a>
      </div>

      <div className="border rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Features</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3 font-medium">{p.title}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">{p.features.length}</td>
                <td className="p-3 text-right">
                  <a
                    href={`/admin/pricing/edit?slug=${p.id}`}
                    className="underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-500">
                  No pricing packages
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
