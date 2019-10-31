import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLoggout } from '../../actions/auth';

export const Header = ({ startLoggout }) => {
  return (
    <div>
      <h1>Budgetify</h1>
      <ul>
        <li>
          <NavLink exact to="/dashboard" activeClassName="is-active">
            Go Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="is-active">
            Add expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
        </li>
      </ul>
      <button onClick={startLoggout}>Logout</button>
      <br />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLoggout: () => dispatch(startLoggout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
