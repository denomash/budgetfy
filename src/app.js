import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRroute';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
