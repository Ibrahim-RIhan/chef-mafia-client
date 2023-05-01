// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhLmoEBdjA--9TWyiT3l81cMfi5c3yGQ",
  authDomain: "chef-mafia.firebaseapp.com",
  projectId: "chef-mafia",
  storageBucket: "chef-mafia.appspot.com",
  messagingSenderId: "671187733758",
  appId: "1:671187733758:web:c1e90ace3230be215e69af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;