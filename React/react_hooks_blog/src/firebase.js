import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCGiZ7Xfkhh3EhI9mUQXCFrkyBgoiy0Ejw",
  authDomain: "react-hooks-blog-d1977.firebaseapp.com",
  projectId: "react-hooks-blog-d1977",
  storageBucket: "react-hooks-blog-d1977.appspot.com",
  messagingSenderId: "798793581366",
  appId: "1:798793581366:web:9fec98ed75b0b954b22997"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();