import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCo1_7H0iXxaYKBn78fo6ksI4mmqsUYZ-I",
    authDomain: "jarvis-6bbe0.firebaseapp.com",
    projectId: "jarvis-6bbe0",
    storageBucket: "jarvis-6bbe0.appspot.com",
    messagingSenderId: "959497321863",
    appId: "1:959497321863:web:531eec1958f52b35b5e722",
    measurementId: "G-X5PM22X2N9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();


/* 
  // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);
 export const db = firebaseApp.firestore();
 export const auth= firebase.auth(); */