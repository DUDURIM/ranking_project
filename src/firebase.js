// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1oPzvS56PlX4_Uqychy_EB8WSrw9buRI",
    authDomain: "dudu-react-basic-f61c1.firebaseapp.com",
    projectId: "dudu-react-basic-f61c1",
    storageBucket: "dudu-react-basic-f61c1.appspot.com",
    messagingSenderId: "185857062823",
    appId: "1:185857062823:web:754077d2647934eb73a882",
    measurementId: "G-2NHBZYS0BQ"
};

// Initialize Firebase

initializeApp(firebaseConfig);
const db = getFirestore();
export {db};