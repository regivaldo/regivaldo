// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4dnoMOl2NJ8PkA4LOaU8B22-BW4HUskA",
  authDomain: "regivaldo-6f23d.firebaseapp.com",
  projectId: "regivaldo-6f23d",
  storageBucket: "regivaldo-6f23d.firebasestorage.app",
  messagingSenderId: "591864513340",
  appId: "1:591864513340:web:131a646d7821fa1da91439",
  measurementId: "G-2294MZK88P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };