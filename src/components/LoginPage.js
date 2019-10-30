import React from 'react';
import { connect } from 'react-redux';

import { startLoggin } from '../actions/auth';

export const LoginPage = ({ startLoggin }) => {
  return (
    <div>
      <button onClick={startLoggin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLoggin: () => dispatch(startLoggin())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
