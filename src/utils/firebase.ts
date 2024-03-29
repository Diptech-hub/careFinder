// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import 'firebase/firestore';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
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
firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const db = firebase.firestore()
export const auth = getAuth(app);
export const storageRef = firebase.storage().ref();
export const googleProvider = new GoogleAuthProvider();

