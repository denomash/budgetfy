import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes, { history } from './routes/AppRroute';
import { firebase } from './firebase/firebase';
import { startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoaderPage from './components/LoaderPage';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoaderPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    ReactDOM.render(app, document.getElementById('app'));
    history.push('/');
  }
});
