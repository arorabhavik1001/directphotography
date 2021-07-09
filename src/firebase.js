import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3p8fADt5JS19sreXKib3gaWwKRdpUsp4",
  authDomain: "directphotography-a2ba1.firebaseapp.com",
  projectId: "directphotography-a2ba1",
  storageBucket: "directphotography-a2ba1.appspot.com",
  messagingSenderId: "951443264591",
  appId: "1:951443264591:web:75f5a9696beea19119063a",
  measurementId: "G-XL98FPN2K3",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export { db, auth };
