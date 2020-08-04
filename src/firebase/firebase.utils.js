import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBYETvLVqID6nMwjDNuKYffkYcjrMDGiQ",
    authDomain: "crwn-db-f82df.firebaseapp.com",
    databaseURL: "https://crwn-db-f82df.firebaseio.com",
    projectId: "crwn-db-f82df",
    storageBucket: "crwn-db-f82df.appspot.com",
    messagingSenderId: "648314859643",
    appId: "1:648314859643:web:56c30736b4b99abd0b32de",
    measurementId: "G-QHZJ0DQLDV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
