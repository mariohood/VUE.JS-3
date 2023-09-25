// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZtMaNpYfP6BmkSndG2Vooqa_6OIJjMKo",
  authDomain: "vue-firebase-auth-cb166.firebaseapp.com",
  projectId: "vue-firebase-auth-cb166",
  storageBucket: "vue-firebase-auth-cb166.appspot.com",
  messagingSenderId: "966269262706",
  appId: "1:966269262706:web:09ad458f302f1be06fdbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);