
// This file is no longer used for form submissions, 
// but is kept in case you want to use other Firebase services in the future.
// You can safely delete it if you don't plan to use Firebase.

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// IMPORTANT: Replace with your new Firebase project's configuration
const firebaseConfig = {
  "projectId": "TU_NUEVO_PROJECT_ID",
  "appId": "TU_NUEVO_APP_ID",
  "storageBucket": "TU_NUEVO_STORAGE_BUCKET",
  "apiKey": "TU_NUEVO_API_KEY",
  "authDomain": "TU_NUEVO_AUTH_DOMAIN",
  "messagingSenderId": "TU_NUEVO_SENDER_ID",
  "measurementId": "TU_NUEVO_MEASUREMENT_ID"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
