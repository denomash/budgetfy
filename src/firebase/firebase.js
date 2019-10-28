import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB642Z-UbD5XrpSUlL3wZsOJ_yKRYqkGJ4',
  authDomain: 'burgetify.firebaseapp.com',
  databaseURL: 'https://burgetify.firebaseio.com',
  projectId: 'burgetify',
  storageBucket: 'burgetify.appspot.com',
  messagingSenderId: '875712097180',
  appId: '1:875712097180:web:d689e68d4bab948860b659',
  measurementId: 'G-3FMFZR5L6J'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

database.ref().set({
  name: 'Deno Mash',
  age: 24,
  isSingle: false,
  location: {
    city: 'Nairobi',
    country: 'Kenya'
  }
});

database.ref('name').set('Dennis Macharia');

database.ref('attributes').set({
  height: '5 feet 3 inches',
  weight: '64Kgs'
});

console.log('I made a request to the db');
