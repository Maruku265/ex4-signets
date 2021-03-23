import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBVNZayndvVPJI-c0dOF-KA6BuGYjd2s98",
  authDomain: "pvt-h21-pilon-marc.firebaseapp.com",
  databaseURL: "https://pvt-h21-pilon-marc-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-pilon-marc",
  storageBucket: "pvt-h21-pilon-marc.appspot.com",
  messagingSenderId: "218748352260",
  appId: "1:218748352260:web:68c0919b23be78067f0251"
};
// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
