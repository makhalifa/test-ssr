// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpBQvlZWLD5-57-ehxhMqzOBL898MfXns",
  authDomain: "itqans-site.firebaseapp.com",
  projectId: "itqans-site",
  storageBucket: "itqans-site.appspot.com",
  messagingSenderId: "514839587025",
  appId: "1:514839587025:web:9eeef26b719954a0cd7df0",
  measurementId: "G-QVRBJLJHKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);