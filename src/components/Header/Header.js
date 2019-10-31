import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLoggout } from '../../actions/auth';

export const Header = ({ startLoggout }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" exact to="/dashboard">
            <h1>Budgetify</h1>
          </Link>
          <button className="button button--link" onClick={startLoggout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLoggout: () => dispatch(startLoggout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
