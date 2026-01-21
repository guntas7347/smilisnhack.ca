"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
} from "@/lib/firebase/faq";

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

  if (loading) return <div className="p-10">Loading...</div>;

  async function save() {
    if (!question || !answer) {
      alert("Question and answer required");
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
    if (!confirm("Delete this FAQ?")) return;
    await deleteFaq(slug!);
    router.push("/admin/faqs");
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {isEdit ? "Edit FAQ" : "Create FAQ"}
      </h1>

      <div className="border rounded p-6 space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <textarea
          className="border p-2 w-full h-40"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="flex justify-between pt-4">
          {isEdit && (
            <button
              onClick={remove}
              className="border px-6 py-3 rounded text-red-600"
            >
              Delete
            </button>
          )}

          <button
            onClick={save}
            disabled={saving}
            className="bg-black text-white px-6 py-3 rounded ml-auto"
          >
            {isEdit ? "Save Changes" : "Create FAQ"}
          </button>
        </div>
      </div>
    </div>
  );
}
