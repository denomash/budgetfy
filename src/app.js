import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRroute';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Rent bill', amount: 300 }));
store.dispatch(addExpense({ description: 'Transport bill', amount: 100 }));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
