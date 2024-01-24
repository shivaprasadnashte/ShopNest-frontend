import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNOBUkhVKWiuj6VX_NlN5HW8ra-R4rkTE",
  authDomain: "shopnest-9fb0c.firebaseapp.com",
  projectId: "shopnest-9fb0c",
  storageBucket: "shopnest-9fb0c.appspot.com",
  messagingSenderId: "777582479724",
  appId: "1:777582479724:web:3f30c6169c6ae11b56cb49",
  measurementId: "G-7ZVY5SMNK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);