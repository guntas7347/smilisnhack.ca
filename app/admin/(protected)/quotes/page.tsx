import { getAllQuotes } from "@/lib/firebase/quote";

export default async function QuotesPage() {
  const quotes = await getAllQuotes();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-black mb-8">Quotes</h1>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Event</th>
              <th className="text-left p-3">Message</th>
              <th className="text-left p-3">Created</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((q) => (
              <tr key={q.id} className="border-b">
                <td className="p-3">
                  {q.firstName} {q.lastName}
                </td>
                <td className="p-3">{q.email}</td>
                <td className="p-3">{q.date}</td>
                <td className="p-3">{q.eventType}</td>
                <td className="p-3 max-w-[400px]">
                  <div className="truncate">{q.message}</div>
                  <a
                    href={`/admin/quotes/${q.id}`}
                    className="text-xs text-blue-600 underline"
                  >
                    View
                  </a>
                </td>
                <td className="p-3">
                  {new Date(q.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {quotes.length === 0 && (
        <div className="text-gray-500 mt-10">No quotes.</div>
      )}
    </div>
  );
}
