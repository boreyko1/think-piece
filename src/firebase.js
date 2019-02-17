import firebase from 'firebase/app';
import 'firebase/firestore';

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

window.firebase = firebase;

export default firebase;
