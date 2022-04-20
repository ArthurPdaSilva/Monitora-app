import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxJwPKGoJz54UcY-PU4y55rlCLsf2bF58",
    authDomain: "monitora-app.firebaseapp.com",
    projectId: "monitora-app",
    storageBucket: "monitora-app.appspot.com",
    messagingSenderId: "108468547530",
    appId: "1:108468547530:web:7385702ffb541cb518a933",
    measurementId: "G-5FXDQ1JY5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();