
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpwFFlDnDj4bcrNt-MwMW3aTR8pRhHyX0",
    authDomain: "servicios-verticales.firebaseapp.com",
    databaseURL: "https://servicios-verticales.firebaseio.com",
    projectId: "servicios-verticales",
    storageBucket: "servicios-verticales.appspot.com",
    messagingSenderId: "109983194952",
    appId: "1:109983194952:web:c7de049e240eced0eb5d7d",
    measurementId: "G-Q51QF62G5B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export { firebase };