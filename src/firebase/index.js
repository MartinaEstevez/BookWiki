// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiB38_bpROIWCE2NBhTnbPOCBm5Aqd9H0",
  authDomain: "bookwiki-bdedd.firebaseapp.com",
  projectId: "bookwiki-bdedd",
  storageBucket: "bookwiki-bdedd.appspot.com",
  messagingSenderId: "97075378515",
  appId: "1:97075378515:web:cb07bbb5eb99853b3c09a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirebaseApp(){
    return app
};
