import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import NotFoundPage from '../components/NotFoundPage';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add" component={AddExpense} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={HelpPage} />
        // Not found page. This should alwaws be the last in routes
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
