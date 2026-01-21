"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getPricingById,
  createPricing,
  updatePricing,
  deletePricing,
} from "@/lib/firebase/pricing";

export default function EditPricingPage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug");

  const isEdit = !!slug;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    getPricingById(slug!).then((data) => {
      if (!data) return;

      setTitle(data.title);
      setPrice(data.price);
      setFeatures(data.features.join("\n"));
      setLoading(false);
    });
  }, [slug, isEdit]);

  if (loading) return <div className="p-10">Loading...</div>;

  async function save() {
    if (!title) {
      alert("Title required");
      return;
    }

    setSaving(true);

    const payload = {
      title,
      price,
      features: features.split("\n").filter(Boolean),
    };

    if (isEdit) {
      await updatePricing(slug!, payload);
    } else {
      await createPricing(payload as any);
    }

    setSaving(false);
    router.push("/admin/pricing");
  }

  async function remove() {
    if (!isEdit) return;
    if (!confirm("Delete this package?")) return;
    await deletePricing(slug!);
    router.push("/admin/pricing");
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {isEdit ? "Edit Pricing Package" : "Create Pricing Package"}
      </h1>

      <div className="border rounded p-6 space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Package Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />

        <textarea
          className="border p-2 w-full h-40"
          placeholder="Features (one per line)"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
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
            {isEdit ? "Save Changes" : "Create Package"}
          </button>
        </div>
      </div>
    </div>
  );
}
