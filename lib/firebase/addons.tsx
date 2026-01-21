import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface Addon {
  id?: string;
  title: string;
  priceLabel: string; // "+$150", "+$200/hr"
  icon: string; // "sparkles" | "clock" | "hourglass" | "sticker"
  active: boolean;
  createdAt?: any;
}

const COL = "addons";

// List all (admin)
export async function getAllAddons() {
  const snap = await getDocs(collection(db, COL));

  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Addon, "id">),
  }));
}

// List active (public)
export async function getActiveAddons() {
  const snap = await getDocs(collection(db, COL));

  return snap.docs
    .map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Addon, "id">),
    }))
    .filter((a) => a.active);
}

// Get one
export async function getAddonById(id: string) {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<Addon, "id">),
  };
}

// Create
export async function createAddon(data: Addon) {
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

// Update
export async function updateAddon(id: string, data: Partial<Addon>) {
  const ref = doc(db, COL, id);
  await updateDoc(ref, data);
}

// Delete
export async function deleteAddon(id: string) {
  const ref = doc(db, COL, id);
  await deleteDoc(ref);
}
