import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBcDNTD6OXirxFe-dtTA4fEBjciAkTyZlQ",
  authDomain: "testing-e52b9.firebaseapp.com",
  projectId: "testing-e52b9",
  storageBucket: "testing-e52b9.appspot.com",
  messagingSenderId: "319122968129",
  appId: "1:319122968129:web:bc8de94ea35d85d6ff40c0",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
