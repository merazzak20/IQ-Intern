// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB700FESuB946EabfcpY9ED-dFw1EQuGtk",
  authDomain: "iq-intern.firebaseapp.com",
  projectId: "iq-intern",
  storageBucket: "iq-intern.firebasestorage.app",
  messagingSenderId: "710302120182",
  appId: "1:710302120182:web:05ce41908ee8d51373d4d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
