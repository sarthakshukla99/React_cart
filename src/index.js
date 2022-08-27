import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import * as firebase from 'firebase';
// import 'firebase/firestore'
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPHwROU399rQPGh0AWcunDcEX7EL-N6hg",
  authDomain: "cart-e0425.firebaseapp.com",
  projectId: "cart-e0425",
  storageBucket: "cart-e0425.appspot.com",
  messagingSenderId: "985748376671",
  appId: "1:985748376671:web:3de767a7a49f9dbf421fea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


