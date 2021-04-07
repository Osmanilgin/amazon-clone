// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXLmVKMxpzyszhqjauaOWcdaC3PVhmLUc",
    authDomain: "clone-8f0ca.firebaseapp.com",
    projectId: "clone-8f0ca",
    storageBucket: "clone-8f0ca.appspot.com",
    messagingSenderId: "267449758690",
    appId: "1:267449758690:web:301e22013ddf9a1724ffbb",
    measurementId: "G-MFYCQE9R0N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth}