import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCthAtDX6SgH5ytj8jQfMcaarcBC3KkNQo",
  authDomain: "netflix-clone-v2-3aa74.firebaseapp.com",
  projectId: "netflix-clone-v2-3aa74",
  storageBucket: "netflix-clone-v2-3aa74.appspot.com",
  messagingSenderId: "712454777201",
  appId: "1:712454777201:web:e14356d04472c3ba5b6ed0",
  measurementId: "G-JYKJW9DSZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
