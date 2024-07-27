// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
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
const firebaseConfig2 = {
  apiKey: "AIzaSyCs9JJS5wIF4Z1D8uMCVL2CL6D-K7gmR00",
  authDomain: "student-search-2.firebaseapp.com",
  projectId: "student-search-2",
  storageBucket: "student-search-2.appspot.com",
  messagingSenderId: "1031856181143",
  appId: "1:1031856181143:web:8defab90eca00212b1bed2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig2);
const db = getFirestore(app)
const storage = getStorage();
// const analytics = getAnalytics(app);s

export {db, storage, ref, uploadString, getDownloadURL}