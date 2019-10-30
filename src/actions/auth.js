import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLoggin = () => () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startLoggout = () => () => {
  return firebase.auth().signOut();
};
