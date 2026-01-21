"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getServicesPage, ServicePackage } from "@/lib/firebase/services";

export default function ServicesTablePage() {
  const params = useSearchParams();
  const router = useRouter();

  const [services, setServices] = useState<ServicePackage[]>([]);
  const [lastCursor, setLastCursor] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const page = Number(params.get("page") || "1");

  async function load() {
    setLoading(true);

    // We store cursors in memory per session page
    // Simple approach: reload always from first page up to target
    let cursor: any = null;
    let result: any = null;

    for (let i = 1; i <= page; i++) {
      result = await getServicesPage(20, cursor);
      cursor = result.lastDoc;
    }

    setServices(result.items);
    setLastCursor(result.lastDoc);
    setHasMore(result.hasMore);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, [page]);

  function goTo(p: number) {
    router.push(`/admin/services?page=${p}`);
  }

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Services</h1>
        <button
          className="border px-4 py-2"
          onClick={() => router.push("/admin/services/edit")}
        >
          + Add Service
        </button>
      </div>
      <div className="border rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Duration</th>
              <th className="text-left p-3">Events</th>
              <th className="text-left p-3">Popular</th>
              <th className="text-left p-3">Active</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3 font-medium">{s.title}</td>
                <td className="p-3">${s.price}</td>
                <td className="p-3">{s.duration}h</td>
                <td className="p-3">{s.eventsCount}</td>
                <td className="p-3">{s.popular ? "Yes" : "No"}</td>
                <td className="p-3">{s.active ? "Yes" : "No"}</td>
                <td className="p-3 text-right">
                  <a
                    href={`/admin/services/edit?slug=${s.id}`}
                    className="underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}

            {!loading && services.length === 0 && (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  No services
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-4">
        <button
          disabled={page <= 1}
          onClick={() => goTo(page - 1)}
          className="border px-4 py-2 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <div>Page {page}</div>

        <button
          disabled={!hasMore}
          onClick={() => goTo(page + 1)}
          className="border px-4 py-2 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
