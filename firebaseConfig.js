import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwhI0eh8zvZ5vq25oP7PFxRXXkRONn9ys",
  authDomain: "workout-logger-2c4e4.firebaseapp.com",
  projectId: "workout-logger-2c4e4",
  storageBucket: "workout-logger-2c4e4.appspot.com",
  messagingSenderId: "504878134707",
  appId: "1:504878134707:web:ec8d54f9107c675e7507c6",
  measurementId: "G-J4F5H32L7X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
