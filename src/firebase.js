import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBlj6rKxfqM49-6fgR0MU1ylC7yDjUqcQM",
  authDomain: "slack-clone-1a91f.firebaseapp.com",
  projectId: "slack-clone-1a91f",
  storageBucket: "slack-clone-1a91f.appspot.com",
  messagingSenderId: "214685872994",
  appId: "1:214685872994:web:e02166009fb207ec8e723b",
  databaseURL: "https://slack-clone-1a91f.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
