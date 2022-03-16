import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
// import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJmO4QORce5PE72S1ZbFT84ms8NJJruNU",
  authDomain: "todo-c5fc3.firebaseapp.com",
  projectId: "todo-c5fc3",
  storageBucket: "todo-c5fc3.appspot.com",
  messagingSenderId: "430490472072",
  appId: "1:430490472072:web:41e1543687cf0d2bff593d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db}

