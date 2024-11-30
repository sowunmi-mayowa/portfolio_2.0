// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPcc7W9dPbiXJj-x2K1kQ9hWi9ldUZa3Y",
  authDomain: "my-portfolio-7d3f6.firebaseapp.com",
  projectId: "my-portfolio-7d3f6",
  storageBucket: "my-portfolio-7d3f6.firebasestorage.app",
  messagingSenderId: "372693187347",
  appId: "1:372693187347:web:b32bd709536dd2441e78e6",
  measurementId: "G-S52D447N3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)