"use client";

import { useEffect, useState } from "react";
import { getAllAddons, Addon } from "@/lib/firebase/addons";

export default function AddonsTablePage() {
  const [items, setItems] = useState<Addon[]>([]);

  async function load() {
    const data = await getAllAddons();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Addons</h1>
        <a href="/admin/addons/edit" className="border px-4 py-2 rounded">
          New Addon
        </a>
      </div>

      <div className="border rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Icon</th>
              <th className="text-left p-3">Active</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="p-3 font-medium">{a.title}</td>
                <td className="p-3">{a.priceLabel}</td>
                <td className="p-3">{a.icon}</td>
                <td className="p-3">{a.active ? "Yes" : "No"}</td>
                <td className="p-3 text-right">
                  <a
                    href={`/admin/addons/edit?slug=${a.id}`}
                    className="underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No addons
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
