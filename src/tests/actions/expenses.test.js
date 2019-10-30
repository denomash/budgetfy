import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('Should setup remove expense action object', () => {
  const removeExpenseResult = removeExpense({ id: '163test' });

  expect(removeExpenseResult).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '163test'
  });
});

test('Should setup edit expense action object', () => {
  const removeExpenseResult = editExpense('4687', { note: 'New note' });

  expect(removeExpenseResult).toEqual({
    type: 'EDIT_EXPENSE',
    id: '4687',
    updates: { note: 'New note' }
  });
});

test('Should setup add expense action object with provided values', () => {
  const addExpenseAction = addExpense(expenses[2]);

  expect(addExpenseAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', done => {
  const store = mockStore({});
  const expenseData = {
    description: 'IPhone',
    note: '',
    amount: 86000,
    createdAt: 3000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);

      done();
    });
});

test('Should add expense with defaults to database and store', done => {
  const store = mockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);

      done();
    });
});

// test('Should setup add expense action object with default values', () => {
// const expenseData = {
//   description: '',
//   note: '',
//   amount: 0,
//   createdAt: 0
// };

//   const addExpenseAction = addExpense();

//   expect(addExpenseAction).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });
