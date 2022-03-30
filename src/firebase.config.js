import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmDJXo_ExLDpj27pXnWC2nTUYeKlnK-kM",
  authDomain: "house-marketplace-appl.firebaseapp.com",
  projectId: "house-marketplace-appl",
  storageBucket: "house-marketplace-appl.appspot.com",
  messagingSenderId: "514551840346",
  appId: "1:514551840346:web:28b40494865d80a9c1e263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
