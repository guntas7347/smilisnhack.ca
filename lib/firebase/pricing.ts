import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

export interface PricingPackage {
  id?: string;
  title: string;
  price: number;
  features: string[];
  createdAt?: any;
}

const COL = "pricing_packages";

// List all
export async function getAllPricing() {
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<PricingPackage, "id">),
  }));
}

// Get one
export async function getPricingById(id: string) {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<PricingPackage, "id">),
  };
}

// Create
export async function createPricing(data: PricingPackage) {
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

// Update
export async function updatePricing(id: string, data: Partial<PricingPackage>) {
  const ref = doc(db, COL, id);
  await updateDoc(ref, data);
}

// Delete
export async function deletePricing(id: string) {
  const ref = doc(db, COL, id);
  await deleteDoc(ref);
}
