import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should add up a single expense correctly', () => {
  const res = selectExpensesTotal([expenses[2]]);
  expect(res).toBe(expenses[2].amount);
});

test('Should add up multiple expenses correctly', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(104580);
});
