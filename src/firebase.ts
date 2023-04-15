import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8e2LrUg8E27Z2_8H4udc4XYULlwd-nAk",
  authDomain: "md-editor-f8cce.firebaseapp.com",
  projectId: "md-editor-f8cce",
  storageBucket: "md-editor-f8cce.appspot.com",
  messagingSenderId: "1008836676558",
  appId: "1:1008836676558:web:61eaaeb59d7c90f1ddf99f",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };
