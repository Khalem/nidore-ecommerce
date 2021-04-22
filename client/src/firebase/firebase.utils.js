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
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
};

/*
    This function moves data to firebase. Should only be run once.
    Might have to modify it depending on how I want my database to be structed.
*/
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // there are unnecessary fields in obj that firebase doc won't need, create new obj
        const { title, routeName, items } = obj;
        const newObj = {
            title,
            routeName
        };

        const newDocRef = collectionRef.doc(title.toLowerCase());
        batch.set(newDocRef, newObj);
        const newCollectionRef = newDocRef.collection('items');

        items.forEach(item => {
            // there are unnecessary fields in obj that firebase doc won't need, create new obj
            const { name, brand, imageUrl, bio, prices } = item;
            const newItemObj = {
                name,
                brand,
                imageUrl,
                bio,
                prices
            };

            const newSubDocumentRef = newCollectionRef.doc();
            batch.set(newSubDocumentRef, newItemObj);
        });
    })

    return await batch.commit();
};


export const convertCollectionsSnapshotToMap = (collections, ref) => {
    const shopData = [];
    let obj = {};

    collections.docs.forEach(doc => {
        const id = doc.id;
        obj = { id, ...doc.data() };
        shopData.push(obj);
    });
    
    return shopData;
};

/* 
    As firebase doesn't provide sub collections in snapshots, I must append the sub collection
    to the previous query
*/
export const appendItemsToData = (partialData, itemSnapshots) => {
    const shopData = [];

    itemSnapshots.forEach((snapshot, index) => {
        const items = [];

        snapshot.forEach(item => {
            const itemObj = {
                id: item.id,
                category: partialData[index].id,
                ...item.data()
            };

            items.push(itemObj);
        });

        let obj = partialData[index];
        obj = {
            ...obj,
            items
        };

        shopData.push(obj);
    });

    return shopData;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;