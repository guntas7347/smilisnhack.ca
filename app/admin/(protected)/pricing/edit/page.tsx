"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getPricingById,
  createPricing,
  updatePricing,
  deletePricing,
} from "@/lib/firebase/pricing";
import {
  ArrowLeft,
  Save,
  Trash2,
  Loader2,
  DollarSign,
  Type,
  ListChecks,
  CreditCard,
} from "lucide-react";

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

  async function save() {
    if (!title) {
      alert("A package title is required.");
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
    if (!confirm("Are you sure you want to delete this package?")) return;
    await deletePricing(slug!);
    router.push("/admin/pricing");
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-2 text-gray-500">
        <Loader2 className="animate-spin" /> Loading package data...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
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
              {isEdit ? "Edit Package" : "New Package"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEdit
                ? "Update pricing tier details."
                : "Create a new pricing tier."}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- LEFT COLUMN: Basic Info --- */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <CreditCard size={18} />
              Package Details
            </h3>

            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Title
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Type size={16} className="text-gray-400" />
                </div>
                <input
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="e.g. Gold Tier, Basic Plan"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                  type="number"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Set to 0 if this is a free or "Contact Us" package.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Features --- */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6 h-full flex flex-col">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <ListChecks size={18} />
              Included Features
            </h3>

            <div className="flex-1 flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feature List (One per line)
              </label>
              <textarea
                className="w-full flex-1 min-h-[200px] p-4 rounded-lg border border-gray-300 font-mono text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                placeholder={"- Unlimited Access\n- 24/7 Support\n- Free Setup"}
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-2">
                These bullet points will appear on the pricing card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
