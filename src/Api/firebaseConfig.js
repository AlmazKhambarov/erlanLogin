import firebase, { initializeApp } from "firebase/app";
import axios from "axios";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { collection, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC73GGYB-89wDQN0Gg5ShepLRh8W1FeQHQ",
    authDomain: "azamat-d7634.firebaseapp.com",
    projectId: "azamat-d7634",
    storageBucket: "azamat-d7634.appspot.com",
    messagingSenderId: "433515095147",
    appId: "1:433515095147:web:88168a68779fb166f4bd2e",
    measurementId: "G-DXTQZ017ZD"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // initialize Firebase Storage
export { auth, db, storage };


export const getUserFiles = (userId) => {
    const filesRef = collection(db, 'files');
    const filesQuery = query(filesRef, where('userId', '==', userId));
  
    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(filesQuery, (snapshot) => {
        const files = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        resolve(files);
      }, reject);
      return unsubscribe;
    });
  };