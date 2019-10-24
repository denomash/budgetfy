import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submision', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
  const description = 'Test description';
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: description }
    });

  expect(wrapper.state('description')).toBe(description);
});

test('Should set note on textarea change', () => {
  const note = 'Test note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: { value: note }
  });

  expect(wrapper.state('note')).toBe(note);
});

test('Should set amount if valid input', () => {
  const amount = '25.89';
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: amount }
    });

  expect(wrapper.state('amount')).toBe(amount);
});

test('Should not set amount if invalid input', () => {
  const amount = 'ww25.89';
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: amount }
    });

  expect(wrapper.state('amount')).toBe('');
});
