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

export async function getToken(): Promise<string> {
  const snap = await adminDb.doc("config/instagram").get();

  if (!snap.exists) {
    throw new Error("Instagram token not found");
  }

  return snap.data()?.access_token;
}

export async function saveToken(token: string, expiresIn: number) {
  await adminDb.doc("config/instagram").set({
    access_token: token,
    expires_in: expiresIn,
    updated_at: Date.now(),
  });
}
