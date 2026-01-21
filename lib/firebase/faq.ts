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

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  createdAt?: any;
}

const COL = "faqs";

// List all
export async function getAllFaqs() {
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<FAQItem, "id">),
  }));
}

// Get one
export async function getFaqById(id: string) {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<FAQItem, "id">),
  };
}

// Create
export async function createFaq(data: FAQItem) {
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

// Update
export async function updateFaq(id: string, data: Partial<FAQItem>) {
  const ref = doc(db, COL, id);
  await updateDoc(ref, data);
}

// Delete
export async function deleteFaq(id: string) {
  const ref = doc(db, COL, id);
  await deleteDoc(ref);
}
