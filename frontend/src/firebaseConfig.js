// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw2euUfDUuOHXuNnMFBnUfsNSkChbKYPo",
  authDomain: "ai-form-builder-platform.firebaseapp.com",
  projectId: "ai-form-builder-platform",
  storageBucket: "ai-form-builder-platform.firebasestorage.app",
  messagingSenderId: "257275261238",
  appId: "1:257275261238:web:a8b1d6842373d77a830397",
  measurementId: "G-W9SCJFTKRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

