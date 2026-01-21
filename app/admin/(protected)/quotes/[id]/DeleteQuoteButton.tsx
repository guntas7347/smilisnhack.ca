"use client";

import { deleteQuote } from "@/lib/firebase/quote";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteQuoteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this quote permanently?")) return;
    
    setLoading(true);
    await deleteQuote(id);
    
    // Redirect via client router to avoid server-action redirect issues
    router.push("/admin/quotes");
    router.refresh(); 
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center gap-2 bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-all disabled:opacity-50"
    >
      <Trash2 size={16} />
      {loading ? "Deleting..." : "Delete Quote"}
    </button>
  );
}