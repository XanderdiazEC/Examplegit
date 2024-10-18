// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZuBOe7lLrtuHZE9mLQVbDZ9NNZkzci6M",
  authDomain: "ist105midtermexamalexanderdiaz.firebaseapp.com",
  projectId: "ist105midtermexamalexanderdiaz",
  storageBucket: "ist105midtermexamalexanderdiaz.appspot.com",
  messagingSenderId: "1077052032068",
  appId: "1:1077052032068:web:d995f4fe7a8025d24f6811"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
