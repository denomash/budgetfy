import authReducer from '../../reducers/auth';

test('Should set default state', () => {
  const state = authReducer({}, { type: '@@INIT' });

  expect(state).toEqual({});
});

test('Should set uid on login', () => {
  const uid = 'hjvgsdgvsvcf';

  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);

  expect(state).toEqual({
    uid
  });
});

test('Should unset uid on logout', () => {
  const state = authReducer({}, { type: 'LOGOUT' });

  expect(state).toEqual({});
});
