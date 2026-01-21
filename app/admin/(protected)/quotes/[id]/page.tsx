import { getQuote } from "@/lib/firebase/quote";
import { notFound } from "next/navigation";

export default async function QuoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quote = await getQuote(id);

  if (!quote) return notFound();

  return (
    <div className="p-10 max-w-3xl">
      <h1 className="text-3xl font-black mb-6">Quote Detail</h1>

      <div className="space-y-4 text-sm">
        <div>
          <b>Name:</b> {quote.firstName} {quote.lastName}
        </div>
        <div>
          <b>Email:</b> {quote.email}
        </div>
        <div>
          <b>Date:</b> {quote.date}
        </div>
        <div>
          <b>Event:</b> {quote.eventType}
        </div>
        <div>
          <b>Submitted:</b> {new Date(quote.createdAt).toLocaleString()}
        </div>

        <div>
          <b>Message:</b>
          <div className="mt-2 p-4 border rounded-lg whitespace-pre-wrap">
            {quote.message}
          </div>
        </div>
      </div>
    </div>
  );
}
