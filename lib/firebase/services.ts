import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";

export interface ServicePackage {
  id?: string;
  title: string;
  subtitle: string;
  price: number;
  duration: number;
  popular: boolean;
  eventsCount: number;
  features: string[];
  active: boolean;
  createdAt?: any;
  imageUrl: string;
}

/* ================================
   Collection ref
================================ */

const COL = "packages";

/* ================================
   API
================================ */

// Get all services (admin)
export async function getAllServices(): Promise<ServicePackage[]> {
  const snap = await getDocs(collection(db, COL));
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<ServicePackage, "id">),
  }));
}
export async function getServicesPage(pageSize = 20, cursor?: any) {
  let q;

  if (cursor) {
    q = query(
      collection(db, COL),
      orderBy("createdAt", "desc"),
      startAfter(cursor),
      limit(pageSize),
    );
  } else {
    q = query(
      collection(db, COL),
      orderBy("createdAt", "desc"),
      limit(pageSize),
    );
  }

  const snap = await getDocs(q);

  const items = snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as any),
  }));

  const lastDoc = snap.docs[snap.docs.length - 1];

  return {
    items,
    lastDoc: lastDoc || null,
    hasMore: snap.docs.length === pageSize,
  };
}

// Get only active services (public site)
export async function getActiveServices(): Promise<ServicePackage[]> {
  const q = query(collection(db, COL), where("active", "==", true));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<ServicePackage, "id">),
  }));
}

// Get one service by id
export async function getServiceById(
  id: string,
): Promise<ServicePackage | null> {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<ServicePackage, "id">),
  };
}

// Create
export async function createService(data: ServicePackage) {
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, COL), payload);
  return docRef.id;
}

// Update
export async function updateService(id: string, data: Partial<ServicePackage>) {
  const ref = doc(db, COL, id);
  await updateDoc(ref, data);
}

// Delete
export async function deleteService(id: string) {
  const ref = doc(db, COL, id);
  await deleteDoc(ref);
}
