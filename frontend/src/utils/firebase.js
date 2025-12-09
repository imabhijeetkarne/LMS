// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-55b5c.firebaseapp.com",
  projectId: "loginvirtualcourses-55b5c",
  storageBucket: "loginvirtualcourses-55b5c.firebasestorage.app",
  messagingSenderId: "648623170254",
  appId: "1:648623170254:web:ec414cb8de9344329f669f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth , provider }