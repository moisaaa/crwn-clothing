import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDoVtqOjAa_K8N06sgehUjyJhhf3yaTzV4',
  authDomain: 'crwn-clothing-820ce.firebaseapp.com',
  projectId: 'crwn-clothing-820ce',
  storageBucket: 'crwn-clothing-820ce.appspot.com',
  messagingSenderId: '412886938464',
  appId: '1:412886938464:web:d0131cbd23b9b04617e405',
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDoc = doc(db, 'users', userAuth.uid);
  console.log(userAuth);
  const userSnapshot = await getDoc(userDoc);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error creating user:', error);
    }
  }
  return userDoc;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
