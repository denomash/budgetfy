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

export default database;

// export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapShot => {
//   const expenses = [];
//   snapShot.forEach(snapShotchild => {
//     expenses.push({
//       id: snapShotchild.key,
//       ...snapShotchild.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 7200,
//   createdAt: 454562
// });

// database.ref().on(
//   'value',
//   snapShot => {
//     const val = snapShot.val();

//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   err => {
//     console.log('Error fetching data', err);
//   }
// );

// setTimeout(() => {
//   database.ref('job/company').set('Amazon');
// }, 5000);

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapShot => {
//     const val = snapShot.val();

//     console.log(val);
//   })
//   .catch(err => {
//     console.log('Error fetching data', err);
//   });

// database
//   .ref()
//   .set({
//     name: 'Deno Mash',
//     age: 24,
//     job: {
//       title: 'Software Engineer',
//       company: 'Andela'
//     },
//     location: {
//       city: 'Nairobi',
//       country: 'Kenya'
//     }
//   })
//   .then(() => {
//     console.log('Data save successfully');
//   })
//   .catch(e => {
//     console.log('Unauthorized', e);
//   });

// database.ref().update({
//   name: 'Dennis Gathigo',
//   'job/company': 'Microsoft',
//   'location/city': 'Mombasa'
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Entry removed successfully');
//   })
//   .catch(err => {
//     console.log('Failed', err);
//   });
