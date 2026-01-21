import { getAllQuotes } from "@/lib/firebase/quote";
import Link from "next/link";
import {
  Calendar,
  Mail,
  MessageSquare,
  Eye,
  User,
  Clock,
  FileText,
} from "lucide-react";

export default async function QuotesPage() {
  const quotes = await getAllQuotes();

  // Helper to format timestamps nicely
  const formatCreated = (dateInput: any) => {
    if (!dateInput) return "-";
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* --- Page Header --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Quote Requests
          </h1>
          <p className="text-gray-500 mt-1">
            View and manage incoming inquiries from customers.
          </p>
        </div>

        {/* Optional: Add an Export button here in the future */}
        <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium">
          Total Requests: {quotes.length}
        </div>
      </div>

      {/* --- Content Card --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Empty State */}
        {quotes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <FileText size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              No quotes received
            </h3>
            <p className="text-gray-500 mt-1">
              New quote requests will appear here.
            </p>
          </div>
        )}

        {/* Table */}
        {quotes.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Event Details</th>
                  <th className="px-6 py-4">Message Preview</th>
                  <th className="px-6 py-4">Received</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {quotes.map((q) => (
                  <tr
                    key={q.id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    {/* Customer Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-1.5 bg-blue-50 text-blue-600 rounded-full">
                          <User size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {q.firstName} {q.lastName}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                            <Mail size={12} />
                            {q.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Event Info */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex w-fit items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {q.eventType}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Calendar size={14} className="text-gray-400" />
                          {q.date}
                        </div>
                      </div>
                    </td>

                    {/* Message Preview */}
                    <td className="px-6 py-4 max-w-xs">
                      <div className="flex items-start gap-2 text-gray-500">
                        <MessageSquare
                          size={14}
                          className="mt-1 text-gray-300 min-w-[14px]"
                        />
                        <p className="text-sm line-clamp-2 leading-relaxed">
                          {q.message}
                        </p>
                      </div>
                    </td>

                    {/* Created At */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={12} />
                        {formatCreated(q.createdAt)}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/quotes/${q.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-300 transition-all"
                      >
                        <Eye size={14} />
                        View
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
