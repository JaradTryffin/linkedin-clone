import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzkxQM0PrS1FIJX-cMWA3RbEvemYmVJPo",
  authDomain: "linkedin-clone-b5a74.firebaseapp.com",
  projectId: "linkedin-clone-b5a74",
  storageBucket: "linkedin-clone-b5a74.appspot.com",
  messagingSenderId: "453329701579",
  appId: "1:453329701579:web:0186800c2495f04fe3a94e",
  measurementId: "G-0P616K4HBD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};