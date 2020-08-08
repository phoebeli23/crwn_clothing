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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(userAuth);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;