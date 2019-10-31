import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Dashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import NotFoundPage from '../components/NotFoundPage';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from '../components/PrivateRoute';

export const history = createBrowserHistory();

const AppRoutes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/add" component={AddExpense} />
        <PrivateRoute exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={HelpPage} />
        // Not found page. This should alwaws be the last in routes
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
