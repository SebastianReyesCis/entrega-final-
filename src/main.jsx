import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyCBnqRnQppjdk4yzWnmiaiYT8NXH2oKlOY",
  authDomain: "e-commerce-cheers.firebaseapp.com",
  projectId: "e-commerce-cheers",
  storageBucket: "e-commerce-cheers.firebasestorage.app",
  messagingSenderId: "959006846583",
  appId: "1:959006846583:web:21c85a996df5bd6bcce072",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
