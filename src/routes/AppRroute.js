import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from '../components/Header/Header';
import Dashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import NotFoundPage from '../components/NotFoundPage';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRoutes = () => (
  <Router history={history}>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add" component={AddExpense} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={HelpPage} />
        // Not found page. This should alwaws be the last in routes
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
