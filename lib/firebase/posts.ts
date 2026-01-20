import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  published: boolean;
  featured: boolean;
  createdAt?: any;
  updatedAt?: any;
};

/* -------- public / admin shared ---------- */

export async function getPostBySlug(slug: string) {
  const ref = doc(db, "posts", slug);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as Post;
}

export async function upsertPost(post: Post) {
  const ref = doc(db, "posts", post.slug);
  await setDoc(
    ref,
    {
      ...post,
      updatedAt: serverTimestamp(),
      createdAt: post.createdAt ?? serverTimestamp(),
    },
    { merge: true },
  );
}

/* -------- admin only ---------- */

export async function getAllPosts() {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deletePost(slug: string) {
  await deleteDoc(doc(db, "posts", slug));
}

export async function getPublishedPosts() {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
  );

  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Post);
}

export async function getFeaturedPost() {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    where("featured", "==", true),
    limit(1),
  );

  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data() as Post;
}

export async function setFeaturedExclusive(slug: string) {
  const snap = await getDocs(collection(db, "posts"));
  for (const d of snap.docs) {
    await updateDoc(doc(db, "posts", d.id), {
      featured: d.id === slug,
    });
  }
}
