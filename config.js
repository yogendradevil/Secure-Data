// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebase = require("firebase");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxxGVAKt7OJ8tT6HWZPeaIGcc6-TPyhw",
  authDomain: "data-9e2bc.firebaseapp.com",
  projectId: "data-9e2bc",
  storageBucket: "data-9e2bc.appspot.com",
  messagingSenderId: "706239189368",
  appId: "1:706239189368:web:936f01eea049a9c514b88d",
  measurementId: "G-7JVCN16FM9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const db = firebase.firestore();
const textData = db.collection("TextData");

module.exports = textData;

