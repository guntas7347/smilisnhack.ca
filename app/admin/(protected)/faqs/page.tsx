"use client";

import { FAQItem, getAllFaqs } from "@/lib/firebase/faq";
import { useEffect, useState } from "react";

export default function FaqTablePage() {
  const [items, setItems] = useState<FAQItem[]>([]);

  async function load() {
    const data = await getAllFaqs();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">FAQs</h1>
        <a href="/admin/faqs/edit" className="border px-4 py-2 rounded">
          New FAQ
        </a>
      </div>

      <div className="border rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Question</th>
              <th className="text-left p-3">Answer</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((f) => (
              <tr key={f.id} className="border-t">
                <td className="p-3 font-medium">{f.question}</td>
                <td className="p-3 text-gray-600 truncate max-w-md">
                  {f.answer}
                </td>
                <td className="p-3 text-right">
                  <a
                    href={`/admin/faqs/edit?slug=${f.id}`}
                    className="underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-gray-500">
                  No FAQs
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
