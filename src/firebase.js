// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8RxNIVh0_RcmBl6vgM9RHICRZIUKOscw",
  authDomain: "mothmysticals-526d4.firebaseapp.com",
  projectId: "mothmysticals-526d4",
  storageBucket: "mothmysticals-526d4.appspot.com",
  messagingSenderId: "183389117644",
  appId: "1:183389117644:web:23d3fe61f4e034e240b669",
  measurementId: "G-1Y3MNCX494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);