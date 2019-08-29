import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB0qKK70uZDbVK4uCyE9skJDKVYXiM14EE",
  authDomain: "svg-db-4d003.firebaseapp.com",
  databaseURL: "https://svg-db-4d003.firebaseio.com",
  projectId: "svg-db-4d003",
  storageBucket: "",
  messagingSenderId: "319368884202",
  appId: "1:319368884202:web:30728cf7f928e037"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;