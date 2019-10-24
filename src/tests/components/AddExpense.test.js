import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />);
});

test('Should display AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[2]);
});
