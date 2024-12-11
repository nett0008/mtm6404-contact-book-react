// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgfcNaS__BX7cH5w9f2hV63HmJqLFSA6c",
  authDomain: "contact-book-e7c54.firebaseapp.com",
  projectId: "contact-book-e7c54",
  storageBucket: "contact-book-e7c54.firebasestorage.app",
  messagingSenderId: "640215246260",
  appId: "1:640215246260:web:a09311ee796fa017d57ee1",
  measurementId: "G-C8P49Z1VF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);