// Import the functions you need from the SDKs you need
import {FirebaseOptions, initializeApp} from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser
} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';
import {User} from '../models/User';
import {AuthCredentials} from '../models/AuthCredentials';
import {CurrentUser} from '../contexts/User';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDaJ58bGHV1i2tmfW6aK0j68dSXIuX8GG0',
  authDomain: 'clothing-store-db-26e65.firebaseapp.com',
  projectId: 'clothing-store-db-26e65',
  storageBucket: 'clothing-store-db-26e65.appspot.com',
  messagingSenderId: '476551672601',
  appId: '1:476551672601:web:79bb3a12d7338c44ebcb88'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user: FirebaseUser) => {
  const userDocRef = doc(db, 'users', user.uid);
  const snapshot = await getDoc(userDocRef);

  if (!snapshot.exists()) {
    const newUser: User = {
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(userDocRef, newUser);
    } catch (error) {
      console.log(`Something went wrong:\n\n${error}`);
    }
  }

  return userDocRef;
};

export const signUpUserWithEmailAndPassword = async (credentials: AuthCredentials) => {
  return await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
};

export const signInUserWithEmailAndPassword = async (credentials: AuthCredentials) => {
  return await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangeListener = (callback: (user: CurrentUser) => void) => onAuthStateChanged(auth, callback);