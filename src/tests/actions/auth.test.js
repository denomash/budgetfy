import configureStore from 'redux-mock-store';
import { login, logout } from '../../actions/auth';

test('Should set up login action object', () => {
  const uid = 'vghsve';
  const loginResult = login(uid);

  expect(loginResult).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Should set up logout action object', () => {
  const logoutResult = logout();

  expect(logoutResult).toEqual({
    type: 'LOGOUT'
  });
});
