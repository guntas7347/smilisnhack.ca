"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getAddonById,
  createAddon,
  updateAddon,
  deleteAddon,
} from "@/lib/firebase/addons";

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

  if (loading) return <div className="p-10">Loading...</div>;

  async function save() {
    if (!title || !priceLabel) {
      alert("Title and price required");
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
    if (!confirm("Delete this addon?")) return;
    await deleteAddon(slug!);
    router.push("/admin/addons");
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {isEdit ? "Edit Addon" : "Create Addon"}
      </h1>

      <div className="border rounded p-6 space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price label (e.g. +$150, +$200/hr)"
          value={priceLabel}
          onChange={(e) => setPriceLabel(e.target.value)}
        />

        <select
          className="border p-2 w-full"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        >
          <option value="sparkles">Sparkles</option>
          <option value="clock">Clock</option>
          <option value="hourglass">Hourglass</option>
          <option value="sticker">Sticker</option>
        </select>

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Active
        </label>

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
            {isEdit ? "Save Changes" : "Create Addon"}
          </button>
        </div>
      </div>
    </div>
  );
}
