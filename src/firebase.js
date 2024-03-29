import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs02IY3YtDYhW_9JYODMRMMAseMp3f3_4",
    authDomain: "react-portfolio-dashboar-c7654.firebaseapp.com",
    projectId: "react-portfolio-dashboar-c7654",
    storageBucket: "react-portfolio-dashboar-c7654.appspot.com",
    messagingSenderId: "316380854062",
    appId: "1:316380854062:web:ad046ddbff858e50e9acbf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle =()=> signInWithPopup(auth,provider)