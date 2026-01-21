import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

export type Quote = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  eventType: string;
  message: string;
  createdAt: number;
};

const COL = "quotes";

export async function submitQuote(data: Omit<Quote, "createdAt">) {
  const payload: Quote = {
    ...data,
    createdAt: Date.now(),
  };

  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

export async function getQuote(id: string) {
  const snap = await getDoc(doc(db, COL, id));
  if (!snap.exists()) return null;

  return { id: snap.id, ...snap.data() } as Quote & { id: string };
}

export async function getAllQuotes() {
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Quote),
  }));
}
