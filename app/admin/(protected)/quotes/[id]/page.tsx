import { getQuote } from "@/lib/firebase/quote";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Mail,
  Clock,
  MessageSquare,
  User,
  Quote,
  Phone, // Import Phone icon
} from "lucide-react";
import DeleteQuoteButton from "./DeleteQuoteButton"; // Removed .tsx extension (standard practice)

export default async function QuoteDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const quote = await getQuote(id);

  if (!quote) return notFound();

  // Helper for dates
  const formatDate = (d: any) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* --- Header Navigation --- */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/admin/quotes"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Quotes</span>
        </Link>

        {/* Delete Button Component */}
        <DeleteQuoteButton id={id} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT COLUMN: Main Content --- */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-indigo-100 p-3 rounded-full h-fit">
                  <User size={32} className="text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {quote.firstName} {quote.lastName}
                  </h1>

                  {/* Contact Info Stack */}
                  <div className="flex flex-col gap-1 mt-2">
                    {/* Email */}
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail size={14} />
                      <a
                        href={`mailto:${quote.email}`}
                        className="hover:text-indigo-600 hover:underline text-sm"
                      >
                        {quote.email}
                      </a>
                    </div>

                    {/* Phone - Only shows if exists */}
                    {quote.phone && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone size={14} />
                        <a
                          href={`tel:${quote.phone}`}
                          className="hover:text-indigo-600 hover:underline text-sm"
                        >
                          {quote.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-indigo-100">
                {quote.eventType}
              </span>
            </div>
          </div>

          {/* Message Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm min-h-[300px]">
            <div className="flex items-center gap-2 mb-4 text-gray-400 font-medium text-sm uppercase tracking-wider">
              <MessageSquare size={16} />
              Message
            </div>
            <div className="relative">
              <Quote
                className="absolute -top-2 -left-4 text-gray-100 fill-gray-100"
                size={48}
              />
              <div className="relative text-lg text-gray-800 leading-relaxed whitespace-pre-wrap font-serif">
                {quote.message}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Sidebar Meta --- */}
        <div className="space-y-6">
          {/* Details Widget */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Event Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="text-gray-400 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Target Date
                  </p>
                  <p className="text-gray-900 font-medium">{quote.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-gray-400 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    Request Received
                  </p>
                  <p className="text-gray-900 text-sm">
                    {formatDate(quote.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 text-center">
            <p className="text-sm text-gray-500 mb-3">Quick Actions</p>

            <div className="space-y-2">
              {/* Email Button */}
              <a
                href={`mailto:${quote.email}?subject=Re: Quote for ${quote.eventType}`}
                className="inline-flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Mail size={16} />
                Send Email
              </a>

              {/* Phone Button (Conditional) */}
              {quote.phone && (
                <a
                  href={`tel:${quote.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone size={16} />
                  Call Customer
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
