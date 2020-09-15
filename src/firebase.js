import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvEOQZ4-XtNI0pWgr_2inStsbaJeb7qGU",
  authDomain: "clone-3349b.firebaseapp.com",
  databaseURL: "https://clone-3349b.firebaseio.com",
  projectId: "clone-3349b",
  storageBucket: "clone-3349b.appspot.com",
  messagingSenderId: "173369756629",
  appId: "1:173369756629:web:b98311a7da729af0420b5c",
  measurementId: "G-YC2H5CPS7M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
