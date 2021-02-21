import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAFVhmfhM2nqInqQpZEuxE1lYfmelOhVRA',
    authDomain: 'react-full-journal-app.firebaseapp.com',
    projectId: 'react-full-journal-app',
    storageBucket: 'react-full-journal-app.appspot.com',
    messagingSenderId: '957631436303',
    appId: '1:957631436303:web:3b3fe769b54d353905757a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
