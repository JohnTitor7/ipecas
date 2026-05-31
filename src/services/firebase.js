import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdUAwqc-PbYQhuOJmWxxsZbj3XcFA_ubE",
  authDomain: "ipecas-17d45.firebaseapp.com",
  projectId: "ipecas-17d45",
  storageBucket: "ipecas-17d45.firebasestorage.app",
  messagingSenderId: "286713576751",
  appId: "1:286713576751:web:5a621e2afe10867522b5da",
  measurementId: "G-FP53C4YS9Q",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);