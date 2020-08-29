import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyAp5NjJsa3gmyQRl0jyDCN7q3Nh6BZthJ4",
  authDomain: "cart-f7cc6.firebaseapp.com",
  databaseURL: "https://cart-f7cc6.firebaseio.com",
  projectId: "cart-f7cc6",
  storageBucket: "cart-f7cc6.appspot.com",
  messagingSenderId: "182216768685",
  appId: "1:182216768685:web:77f2f6346b747683f79a24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


