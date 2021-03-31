import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const config = {
    apiKey: API_KEY,
    authDomain: "nidore-ecommerce.firebaseapp.com",
    projectId: "nidore-ecommerce",
    storageBucket: "nidore-ecommerce.appspot.com",
    messagingSenderId: "671718006494",
    appId: "1:671718006494:web:b2887fed12acbe2da92c4f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { name, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                name,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;