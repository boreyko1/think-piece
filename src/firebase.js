import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDizWbX3zz8pLP908qFO3FnvgIIRhhmLPM',
  authDomain: 'think-piece-fdcac.firebaseapp.com',
  databaseURL: 'https://think-piece-fdcac.firebaseio.com',
  projectId: 'think-piece-fdcac',
  storageBucket: 'think-piece-fdcac.appspot.com',
  messagingSenderId: '850859082261'
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

window.firebase = firebase;

export default firebase;
