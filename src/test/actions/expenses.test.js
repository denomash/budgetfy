import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'August Rent ',
    note: 'Rent',
    amount: 45700,
    createdAt: 3000
  };

  const addExpenseAction = addExpense(expenseData);

  expect(addExpenseAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  const addExpenseAction = addExpense();

  expect(addExpenseAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
