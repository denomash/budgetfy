import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRoutes from './routes/AppRroute';

const store = configureStore();

ReactDOM.render(<AppRoutes />, document.getElementById('app'));
