// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATyEQqy2j808afsmRJ9zxlh4uvU03qXRc",
  authDomain: "supermemo-653bc.firebaseapp.com",
  projectId: "supermemo-653bc",
  storageBucket: "supermemo-653bc.appspot.com",
  messagingSenderId: "932945991479",
  appId: "1:932945991479:web:640fc6a42676aa3fbcacb2"
};

// Initialize Firebase
if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}