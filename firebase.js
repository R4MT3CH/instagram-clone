import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARqwfbYyeLjqoLd-Iev8gLV7fjodZALtY",
  authDomain: "mingool.firebaseapp.com",
  projectId: "mingool",
  storageBucket: "mingool.appspot.com",
  messagingSenderId: "824588183067",
  appId: "1:824588183067:web:4b6e447cac811804e9fabe",
  measurementId: "G-1WRTD3HH5Y"
};

//Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

if (!getApps().length){
 const app = initializeApp(firebaseConfig);
 const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
}

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}