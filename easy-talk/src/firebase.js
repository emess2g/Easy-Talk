// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT92CRiuUD0JGYdNYqG8kkyEUDqB7PSBw",
  authDomain: "chatappreact1-c4832.firebaseapp.com",
  projectId: "chatappreact1-c4832",
  storageBucket: "chatappreact1-c4832.appspot.com",
  messagingSenderId: "537820663164",
  appId: "1:537820663164:web:af96df6dc099b5eaf4a8f9",
  measurementId: "G-5TQJ2LE62L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
