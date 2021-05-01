import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBs2R3EL7sJRGIeseNNqJcVizMJL9kDyJ4",
  authDomain: "authentication-cd512.firebaseapp.com",
  projectId: "authentication-cd512",
  storageBucket: "authentication-cd512.appspot.com",
  messagingSenderId: "757414063626",
  appId: "1:757414063626:web:0b0a92fa371be697b679f3",
  measurementId: "G-LRDTNYQNTG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
