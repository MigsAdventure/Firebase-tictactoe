import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRXlauqd3Q3Hsk03G9A3x1GEh0EQIx-nE",
  authDomain: "test-f5292.firebaseapp.com",
  databaseURL: "https://test-f5292.firebaseio.com",
  storageBucket: "test-f5292.appspot.com",
  messagingSenderId: "548008632512"
};
export const app = firebase.initializeApp(config);
export const database = app.database();
  
