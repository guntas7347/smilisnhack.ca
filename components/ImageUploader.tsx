"use client";

import { uploadToCloudinaryUnsigned } from "@/lib/cloudinary";
import { useState } from "react";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export default function ImageUploader({ value, onChange }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleFile(file: File) {
    setLoading(true);
    try {
      const url = await uploadToCloudinaryUnsigned(file);
      onChange(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2 border px-1 py-1">
      <h1>Cover Image:</h1>
      {!value && (
        <input
          type="file"
          accept="image/*"
          disabled={loading}
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            await handleFile(file);
          }}
        />
      )}

      {value && (
        <div className="space-y-2">
          <img src={value} className="max-h-48 rounded border" />

          <div className="flex gap-2">
            <button
              className="border px-4 py-1"
              onClick={() => {
                // just forget locally, DO NOT delete from Cloudinary
                onChange("");
              }}
            >
              Remove
            </button>

            <label className="border px-4 py-1 cursor-pointer">
              {loading ? "Uploading..." : "Replace"}
              <input
                type="file"
                accept="image/*"
                hidden
                disabled={loading}
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  await handleFile(file);
                }}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
