"use server";

import admin from "firebase-admin";

let app: admin.app.App;

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  });
} else {
  app = admin.app();
}

const adminDb = admin.firestore();

type TokenData = {
  access_token: string;
  updated_at: number; // token issued time
};

export async function getToken(): Promise<TokenData> {
  const snap = await adminDb.doc("config/instagram").get();

  if (!snap.exists) {
    throw new Error("Instagram token not found");
  }

  console.log("Firebase check:", {
    exists: snap.exists,
    hasAccessToken: typeof snap.data()?.access_token === "string",
    hasUpdatedAt: typeof snap.data()?.updated_at === "number",
  });
  const data = snap.data();

  return {
    access_token: data?.access_token,
    updated_at: data?.updated_at,
  };
}

export async function saveToken(token: string) {
  await adminDb.doc("config/instagram").set({
    access_token: token,
    updated_at: Date.now(), // ONLY updated on refresh
  });
}
