import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('Should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'ep3'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Lunch',
    note: '',
    amount: 450,
    createdAt: moment(0)
      .add(15, 'days')
      .valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
  const updates = {
    description: 'Coffee',
    note: 'Java house'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state[1].description).toBe(updates.description);
  expect(state[1].note).toBe(updates.note);
});

test('Should not edit an expense if id not found', () => {
  const updates = {
    description: 'Coffee',
    note: 'Java house'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'ah010',
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('Should set expenset', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
