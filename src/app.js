import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRroute';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { startSetExpense } from './actions/expenses';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
  ReactDOM.render(app, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User logged in');
  } else {
    console.log('User logged out');
  }
});
