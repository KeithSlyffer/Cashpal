import { initializeApp, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5hEFnMCrv60KMmqcGpQpO7zUP_sRDBc",
  authDomain: "cashpal-ce5c4.firebaseapp.com",
  projectId: "cashpal-ce5c4",
  storageBucket: "cashpal-ce5c4.appspot.com",
  messagingSenderId: "210330303786",
  appId: "1:210330303786:web:27bf06d8b680b09888b253",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, getApp, getAuth };
