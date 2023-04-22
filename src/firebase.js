// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBd7QJ8YTxyeZpzJ6wqsrvMZV5PfCwR78E",
//   authDomain: "fir-pbl-d809e.firebaseapp.com",
//   projectId: "fir-pbl-d809e",
//   storageBucket: "fir-pbl-d809e.appspot.com",
//   messagingSenderId: "997940039353",
//   appId: "1:997940039353:web:04510e17abddd01ffd1568"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDx7NgpRy5x10a8mUXMhweqfGUZUeXNMnI",
  authDomain: "pbl5-e18b0.firebaseapp.com",
  projectId: "pbl5-e18b0",
  storageBucket: "pbl5-e18b0.appspot.com",
  messagingSenderId: "764037082107",
  appId: "1:764037082107:web:e5bc7759fae0e67052395e",
  measurementId: "G-XVH2L471WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };