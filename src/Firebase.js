// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDDwh6QLN7YEQjJLjpeyAhywCgz25RlFnc",
  authDomain: "hamrowakil.firebaseapp.com",
  databaseURL: "https://hamrowakil-default-rtdb.firebaseio.com",
  projectId: "hamrowakil",
  storageBucket: "hamrowakil.appspot.com",
  messagingSenderId: "657501614085",
  appId: "1:657501614085:web:b1970880f07feac8906c6c"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCYgRw1A3pUNODzkhVaQ9lyfUAgUZtvyrk",
//   authDomain: "final-737ad.firebaseapp.com",
//   databaseURL: "https://final-737ad-default-rtdb.firebaseio.com",
//   projectId: "final-737ad",
//   storageBucket: "final-737ad.appspot.com",
//   messagingSenderId: "186787033416",
//   appId: "1:186787033416:web:680c8c058d1c68bd07c37d",
//   measurementId: "G-46B52ZPRKZ"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
// export const storage = firebase.storage("gs://react-project1-61977.appspot.com");

export default firebase;



