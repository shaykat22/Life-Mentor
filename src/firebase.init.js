// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgNZ-Qb_7Hxsb3MwoGhDBfuQ6rowcR98s",
  authDomain: "life-mentor-779ff.firebaseapp.com",
  projectId: "life-mentor-779ff",
  storageBucket: "life-mentor-779ff.appspot.com",
  messagingSenderId: "1032118611751",
  appId: "1:1032118611751:web:53d2022c988463681ec302"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;