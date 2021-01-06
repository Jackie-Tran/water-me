import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUytbDqoX0WrOze98NEOku5cxpBTYRHlg',
  authDomain: 'water-me-c10a5.firebaseapp.com',
  projectId: 'water-me-c10a5',
  storageBucket: 'water-me-c10a5.appspot.com',
  messagingSenderId: '319720282499',
  appId: '1:319720282499:web:20294124df4cb05b953eb6',
  measurementId: 'G-3GPS0MTG3Q',
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;