import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4koCYolxV7GZoQOi20P3gfmzm6MvvcNA",
  authDomain: "sample-project-f5848.firebaseapp.com",
  projectId: "sample-project-f5848",
  storageBucket: "sample-project-f5848.appspot.com",
  messagingSenderId: "952480604268",
  appId: "1:952480604268:web:11ee92c22930f4d156b849",
  measurementId: "G-H2QBHBZ03G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
