"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getAddonById,
  createAddon,
  updateAddon,
  deleteAddon,
} from "@/lib/firebase/addons";
import {
  ArrowLeft,
  Save,
  Trash2,
  Loader2,
  Tag,
  Sparkles,
  Clock,
  Hourglass,
  Sticker,
  CheckCircle2,
  Type,
} from "lucide-react";

// Icon mapping for the visual picker
const ICON_OPTIONS = [
  { value: "sparkles", label: "Sparkles", icon: Sparkles },
  { value: "clock", label: "Clock", icon: Clock },
  { value: "hourglass", label: "Hourglass", icon: Hourglass },
  { value: "sticker", label: "Sticker", icon: Sticker },
];

export default function EditAddonPage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug");

  const isEdit = !!slug;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [priceLabel, setPriceLabel] = useState("");
  const [icon, setIcon] = useState("sparkles");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!isEdit) return;

    getAddonById(slug!).then((data) => {
      if (!data) return;

      setTitle(data.title);
      setPriceLabel(data.priceLabel);
      setIcon(data.icon);
      setActive(data.active);
      setLoading(false);
    });
  }, [slug, isEdit]);

  async function save() {
    if (!title || !priceLabel) {
      alert("Please provide both a Title and a Price Label.");
      return;
    }

    setSaving(true);

    const payload = {
      title,
      priceLabel,
      icon,
      active,
    };

    if (isEdit) {
      await updateAddon(slug!, payload);
    } else {
      await createAddon(payload as any);
    }

    setSaving(false);
    router.push("/admin/addons");
  }

  async function remove() {
    if (!isEdit) return;
    if (!confirm("Are you sure you want to delete this addon?")) return;
    await deleteAddon(slug!);
    router.push("/admin/addons");
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-2 text-gray-500">
        <Loader2 className="animate-spin" /> Loading addon data...
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
              {isEdit ? "Edit Addon" : "New Addon"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEdit
                ? "Update addon details."
                : "Create a new optional service."}
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
        {/* --- LEFT COLUMN: Details --- */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Tag size={18} />
              Addon Details
            </h3>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Addon Title
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Type size={16} className="text-gray-400" />
                </div>
                <input
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="e.g. Idle Hour, Memory Book"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Price Label */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Label
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="e.g. +$150, +$200/hr, Free"
                value={priceLabel}
                onChange={(e) => setPriceLabel(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the exact text to display (e.g. "+$50" or "+$100 / hr")
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Settings --- */}
        <div className="space-y-6">
          {/* Visuals Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-3">
              Appearance
            </h3>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Icon
            </label>
            <div className="grid grid-cols-4 gap-3">
              {ICON_OPTIONS.map((opt) => {
                const IconComp = opt.icon;
                const isSelected = icon === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setIcon(opt.value)}
                    className={`
                      flex flex-col items-center justify-center p-3 rounded-lg border transition-all
                      ${
                        isSelected
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                      }
                    `}
                    title={opt.label}
                  >
                    <IconComp size={24} className="mb-1" />
                    <span className="text-[10px] font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-3 mb-4">
              Status
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Active on Website
                </span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
