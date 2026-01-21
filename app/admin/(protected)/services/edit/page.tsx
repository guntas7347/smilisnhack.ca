"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import {
  getServiceById,
  updateService,
  deleteService,
  createService,
  ServicePackage,
} from "@/lib/firebase/services";
import {
  ArrowLeft,
  Save,
  Trash2,
  Loader2,
  DollarSign,
  Clock,
  Layers,
  Star,
  CheckCircle2,
  ImageIcon,
  Type,
} from "lucide-react";

export default function EditServicePage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug"); // id

  const isEdit = !!slug;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    price: 0,
    duration: 0,
    popular: false,
    eventsCount: 0,
    features: "",
    active: true,
  });

  useEffect(() => {
    if (!isEdit) return;

    getServiceById(slug!).then((data) => {
      if (!data) return;

      setImageUrl(data.imageUrl || "");

      setForm({
        title: data.title,
        subtitle: data.subtitle,
        price: data.price,
        duration: data.duration,
        popular: data.popular,
        eventsCount: data.eventsCount,
        features: data.features.join("\n"),
        active: data.active,
      });

      setLoading(false);
    });
  }, [slug, isEdit]);

  async function save() {
    if (!imageUrl) {
      alert("Please upload an image for the service.");
      return;
    }

    if (!form.title) {
      alert("A title is required.");
      return;
    }

    setSaving(true);

    const payload = {
      title: form.title,
      subtitle: form.subtitle,
      price: form.price,
      duration: form.duration,
      popular: form.popular,
      eventsCount: form.eventsCount,
      features: form.features.split("\n").filter(Boolean),
      active: form.active,
      imageUrl: imageUrl,
    };

    if (isEdit) {
      await updateService(slug!, payload);
    } else {
      await createService(payload as any);
    }

    setSaving(false);
    router.push("/admin/services");
  }

  async function remove() {
    if (!isEdit) return;
    if (
      !confirm(
        "Are you sure you want to delete this service? This cannot be undone.",
      )
    )
      return;
    await deleteService(slug!);
    router.push("/admin/services");
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-2 text-gray-500">
        <Loader2 className="animate-spin" /> Loading service data...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
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
              {isEdit ? "Edit Service" : "New Service"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEdit
                ? "Update service details and pricing."
                : "Create a new service package."}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT COLUMN: Main Info --- */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Details Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Type size={18} />
              Service Details
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Title
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="e.g. Premium Wedding Package"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subtitle / Short Description
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="e.g. Perfect for large gatherings up to 300 guests"
                  value={form.subtitle}
                  onChange={(e) =>
                    setForm({ ...form, subtitle: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Layers size={18} />
              Features List
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Features (One per line)
              </label>
              <textarea
                className="w-full h-64 p-4 rounded-lg border border-gray-300 font-mono text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                placeholder={
                  "- 4 Hours of Service\n- Unlimited Prints\n- Custom Props"
                }
                value={form.features}
                onChange={(e) => setForm({ ...form, features: e.target.value })}
              />
              <p className="text-xs text-gray-500 mt-2">
                Tip: Each line will be displayed as a bullet point on the
                website.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Settings & Media --- */}
        <div className="space-y-6">
          {/* Visibility / Status Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-3">
              Settings
            </h3>

            {/* Active Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Active
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={form.active}
                  onChange={(e) =>
                    setForm({ ...form, active: e.target.checked })
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            {/* Popular Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Popular
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={form.popular}
                  onChange={(e) =>
                    setForm({ ...form, popular: e.target.checked })
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>

          {/* Pricing & Metrics Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-3">
              Pricing & Data
            </h3>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">
                Price ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                  type="number"
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: +e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">
                  Duration (Hours)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={form.duration}
                    onChange={(e) =>
                      setForm({ ...form, duration: +e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide">
                  Events Count
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Layers size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={form.eventsCount}
                    onChange={(e) =>
                      setForm({ ...form, eventsCount: +e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
              <ImageIcon size={18} />
              Service Image
            </h3>
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
              <ImageUploader value={imageUrl} onChange={setImageUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
