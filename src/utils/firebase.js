// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "y",
  authDomain: "netflix-clone-bp.firebaseapp.com",
  projectId: "netflix-clone-bp",
  storageBucket: "netflix-clone-bp.appspot.com",
  messagingSenderId: "783147995787",
  appId: "1:783147995787:web:d2649699846d2af6a7fa8e",
  measurementId: "G-CZM65NMVJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
