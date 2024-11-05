// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDFwaErfSj8tP4bYY3Ya1YBkWV1m6F2d0w",

  authDomain: "delivery-de-servico.firebaseapp.com",

  projectId: "delivery-de-servico",

  storageBucket: "delivery-de-servico.firebasestorage.app",

  messagingSenderId: "623111370085",

  appId: "1:623111370085:web:0c106b92435c3a27fa1d8c"
  
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
export { auth, firestore, storage };
