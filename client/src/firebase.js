// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-72d92.firebaseapp.com",
  projectId: "mern-blog-72d92",
  storageBucket: "mern-blog-72d92.firebasestorage.app",
  messagingSenderId: "1042659037905",
  appId: "1:1042659037905:web:b615f3a594b6baa8746bf0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
