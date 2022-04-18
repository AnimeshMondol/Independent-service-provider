// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrpzlRVDGXQgLy8IInTNbb4IBbHC_zPoE",
  authDomain: "peter-parker-2a782.firebaseapp.com",
  projectId: "peter-parker-2a782",
  storageBucket: "peter-parker-2a782.appspot.com",
  messagingSenderId: "539810612382",
  appId: "1:539810612382:web:91588d0ca50448351da78f",
  measurementId: "G-1SS2G4EYZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;