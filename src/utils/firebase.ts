// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2N9V51bRbxbUvOMav3ow-_Gxr54gZKhg",
  authDomain: "carefinder-8c2d0.firebaseapp.com",
  projectId: "carefinder-8c2d0",
  storageBucket: "carefinder-8c2d0.appspot.com",
  messagingSenderId: "1060795142555",
  appId: "1:1060795142555:web:8b6e94f70d7ed3fe27113e",
  measurementId: "G-EPW85J2JJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
