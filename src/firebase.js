// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSAcIamN9S89Nal0Nva3DJaLhVGUNnw6I",
    authDomain: "slack-clone-bdd6d.firebaseapp.com",
    databaseURL: "https://slack-clone-bdd6d.firebaseio.com",
    projectId: "slack-clone-bdd6d",
    storageBucket: "slack-clone-bdd6d.appspot.com",
    messagingSenderId: "1018755095654",
    appId: "1:1018755095654:web:f06cfe02e1303d02c7e1a7",
    measurementId: "G-DR3XEMSCHB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
//   db is going to allow us to access our db and pass it on anywhere in the app where needed. 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // this allows us to access the Google auth provider 
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}; 
  export default db;

//   difference between default and no default 
//   import {auth,provider} from './firebase';
//   import db from './firebase'