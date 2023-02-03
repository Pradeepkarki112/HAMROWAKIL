// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyDDwh6QLN7YEQjJLjpeyAhywCgz25RlFnc",
//   authDomain: "hamrowakil.firebaseapp.com",
//   databaseURL: "https://hamrowakil-default-rtdb.firebaseio.com",
//   projectId: "hamrowakil",
//   storageBucket: "hamrowakil.appspot.com",
//   messagingSenderId: "657501614085",
//   appId: "1:657501614085:web:b1970880f07feac8906c6c"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD-ysr3A2M1Erjuu67rOa0yXt2NSJENtnQ",
  authDomain: "hamrowakil-25836.firebaseapp.com",
  databaseURL: "https://hamrowakil-25836-default-rtdb.firebaseio.com",
  projectId: "hamrowakil-25836",
  storageBucket: "hamrowakil-25836.appspot.com",
  messagingSenderId: "235916491638",
  appId: "1:235916491638:web:b6978f10a8ab5320fcd857",
  measurementId: "G-3B5S9K05M1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
// export const storage = firebase.storage("gs://react-project1-61977.appspot.com");

export default firebase;



