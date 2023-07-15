import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore'
// import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqdWy8sLEUFxAJjIVbLNwgmNpwFg5SxwY",
  authDomain: "cart-74f0e.firebaseapp.com",
  projectId: "cart-74f0e",
  storageBucket: "cart-74f0e.appspot.com",
  messagingSenderId: "1030554342508",
  appId: "1:1030554342508:web:913fe0871606ed0a4fb449"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
