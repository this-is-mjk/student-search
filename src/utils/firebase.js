// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAnDcEdiwku_aYUfVLHFOcPWTyWbKAxwI",
  authDomain: "studentsearchiitk.firebaseapp.com",
  projectId: "studentsearchiitk",
  storageBucket: "studentsearchiitk.appspot.com",
  messagingSenderId: "383149599410",
  appId: "1:383149599410:web:8cd2ac9581639f191837ab",
  measurementId: "G-QNT18BEJCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const storage = getStorage();
// const analytics = getAnalytics(app);s

export {db}