// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbEIRG0DWLublPBPNTdvt687h6xVT4vuM",
  authDomain: "dragon-news-27a9a.firebaseapp.com",
  projectId: "dragon-news-27a9a",
  storageBucket: "dragon-news-27a9a.firebasestorage.app",
  messagingSenderId: "725810222107",
  appId: "1:725810222107:web:5b392ff793adbf02ca14be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;