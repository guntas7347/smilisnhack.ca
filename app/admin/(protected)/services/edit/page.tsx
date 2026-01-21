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

export default function EditServicePage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug"); // id

  const isEdit = !!slug;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [service, setService] = useState<ServicePackage | null>(null);
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

      setService(data);
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

  if (loading) return <div className="p-10">Loading...</div>;

  async function save() {
    if (!imageUrl) {
      alert("Upload an image");
      return;
    }

    if (!form.title) {
      alert("Title required");
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
    if (!confirm("Delete this service?")) return;
    await deleteService(slug!);
    router.push("/admin/services");
  }

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {isEdit ? "Edit Service" : "Create Service"}
      </h1>

      <div className="border rounded p-6 space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="">Price</label>
            <input
              className="border p-2"
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: +e.target.value })}
            />
          </div>{" "}
          <div className="flex flex-col">
            <label htmlFor="">Duration in hours</label>
            <input
              className="border p-2"
              type="number"
              placeholder="Duration"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: +e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Event Count</label>
          <input
            className="border p-2 w-full"
            type="number"
            placeholder="Events Count"
            value={form.eventsCount}
            onChange={(e) => setForm({ ...form, eventsCount: +e.target.value })}
          />
        </div>
        <ImageUploader value={imageUrl} onChange={setImageUrl} />

        <textarea
          className="border p-2 w-full h-40"
          placeholder="Features (one per line)"
          value={form.features}
          onChange={(e) => setForm({ ...form, features: e.target.value })}
        />

        <div className="flex gap-6">
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={form.popular}
              onChange={(e) => setForm({ ...form, popular: e.target.checked })}
            />
            Popular
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={form.active}
              onChange={(e) => setForm({ ...form, active: e.target.checked })}
            />
            Active
          </label>
        </div>

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
            {isEdit ? "Save Changes" : "Create Service"}
          </button>
        </div>
      </div>
    </div>
  );
}
