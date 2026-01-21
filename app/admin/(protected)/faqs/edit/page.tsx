"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
} from "@/lib/firebase/faq";
import {
  ArrowLeft,
  Save,
  Trash2,
  Loader2,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

export default function EditFaqPage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug");

  const isEdit = !!slug;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    getFaqById(slug!).then((data) => {
      if (!data) return;

      setQuestion(data.question);
      setAnswer(data.answer);
      setLoading(false);
    });
  }, [slug, isEdit]);

  async function save() {
    if (!question || !answer) {
      alert("Both a Question and an Answer are required.");
      return;
    }

    setSaving(true);

    const payload = { question, answer };

    if (isEdit) {
      await updateFaq(slug!, payload);
    } else {
      await createFaq(payload as any);
    }

    setSaving(false);
    router.push("/admin/faqs");
  }

  async function remove() {
    if (!isEdit) return;
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    await deleteFaq(slug!);
    router.push("/admin/faqs");
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-2 text-gray-500">
        <Loader2 className="animate-spin" /> Loading FAQ data...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      {/* --- Top Action Bar --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isEdit ? "Edit FAQ" : "New FAQ"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEdit
                ? "Update this question and answer."
                : "Add a frequently asked question."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isEdit && (
            <button
              onClick={remove}
              className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
            >
              <Trash2 size={16} />
              <span className="hidden sm:inline">Delete</span>
            </button>
          )}

          <button
            onClick={save}
            disabled={saving}
            className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Save size={18} />
            )}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* --- Content Card --- */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-8">
        {/* Question Input */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <HelpCircle size={18} className="text-indigo-600" />
            Question
          </label>
          <input
            className="w-full px-4 py-3 text-lg font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:font-normal placeholder:text-gray-400"
            placeholder="e.g. Do you require a deposit?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        {/* Answer Textarea */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <MessageCircle size={18} className="text-indigo-600" />
            Answer
          </label>
          <textarea
            className="w-full min-h-[200px] p-4 rounded-lg border border-gray-300 text-gray-700 leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-y"
            placeholder="Provide a clear and helpful answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <p className="text-xs text-gray-500 text-right">
            {answer.length} characters
          </p>
        </div>
      </div>
    </div>
  );
}
