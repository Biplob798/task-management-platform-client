// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3McxN-fJiLS_7f2LeCHTUjp_HfzaIlsc",
  authDomain: "task-management-app-84745.firebaseapp.com",
  projectId: "task-management-app-84745",
  storageBucket: "task-management-app-84745.appspot.com",
  messagingSenderId: "273350320890",
  appId: "1:273350320890:web:d8927f2ef5a5799faa5f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth