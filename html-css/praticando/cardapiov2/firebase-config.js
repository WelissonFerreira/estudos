// firebase-config.js (ou no seu arquivo principal)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "backendcardapio.firebaseapp.com",
    projectId: "backendcardapio",
    storageBucket: "backendcardapio.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializa app Firebase
const app = initializeApp(firebaseConfig);

// Pega referência do Firestore
const db = getFirestore(app);

export { db, collection, addDoc };
