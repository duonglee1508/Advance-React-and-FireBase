import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtw7B5JjtXqrk2JIp3OrdabpLcCRF8LcE",
  authDomain: "learn-firebase-b2428.firebaseapp.com",
  projectId: "learn-firebase-b2428",
  storageBucket: "learn-firebase-b2428.appspot.com",
  messagingSenderId: "280015805412",
  appId: "1:280015805412:web:bc6c3d936227510c5205f1",
};

const app = initializeApp(firebaseConfig);
// Init services

export const db = getFirestore(app);
export const auth = getAuth(app);
