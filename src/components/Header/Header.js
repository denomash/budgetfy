import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Budgetify</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="is-active">
            Go Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="is-active">
            Add expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit" activeClassName="is-active">
            Edit Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
