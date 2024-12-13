// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

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
  appId: "1:640215246260:web:908d5835799d8e9ad57ee1",
  measurementId: "G-ZPBE3XN5LD"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized, use that one
}

const db = firebase.firestore();

export default db;