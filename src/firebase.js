import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPFljTOjPHR2zglPGHg6c_QoR7LvQWcyg",
    authDomain: "direct-photography-f130b.firebaseapp.com",
    projectId: "direct-photography-f130b",
    storageBucket: "direct-photography-f130b.appspot.com",
    messagingSenderId: "275113887290",
    appId: "1:275113887290:web:87c296a1b801885d901703",
    measurementId: "G-SY7L3FFFZS"
  };

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export { db };

// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPFljTOjPHR2zglPGHg6c_QoR7LvQWcyg",
//   authDomain: "direct-photography-f130b.firebaseapp.com",
//   projectId: "direct-photography-f130b",
//   storageBucket: "direct-photography-f130b.appspot.com",
//   messagingSenderId: "275113887290",
//   appId: "1:275113887290:web:87c296a1b801885d901703",
//   measurementId: "G-SY7L3FFFZS"
// };


// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }