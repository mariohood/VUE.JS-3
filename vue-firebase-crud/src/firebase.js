// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "vue-firebase-crud-f414b.firebaseapp.com",
  projectId: "vue-firebase-crud-f414b",
  storageBucket: "vue-firebase-crud-f414b.appspot.com",
  messagingSenderId: "558714451569",
  appId: "1:558714451569:web:981fa3fa3e801d3de00dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
