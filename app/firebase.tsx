import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCb5_xkuJPhRvU1DWXbplw4IXk8s9w4Spk",
    authDomain: "newssdgtasik.firebaseapp.com",
    projectId: "newssdgtasik",
    storageBucket: "newssdgtasik.appspot.com",
    messagingSenderId: "751420052495",
    appId: "1:751420052495:web:c2b6e726ae87ab3f7f3f7a",
    measurementId: "G-GHJQ9RQ8HD"
  };

  const app = firebase.initializeApp(firebaseConfig);
export const db  = firebase.firestore();