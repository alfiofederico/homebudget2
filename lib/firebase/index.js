// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkMekDEcSvxFgFjeQ8FM2RwEs8tTKziv0",
  authDomain: "homebudget-34f68.firebaseapp.com",
  projectId: "homebudget-34f68",
  storageBucket: "homebudget-34f68.appspot.com",
  messagingSenderId: "585536026034",
  appId: "1:585536026034:web:1d32c4692a0f148da3a0ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db}
