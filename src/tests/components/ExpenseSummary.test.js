import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should display ExpenseSummary correctly with a single expense', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseTotal={234} />
  );

  expect(wrapper).toMatchSnapshot();
});

test('Should display ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={54} expenseTotal={97300} />
  );

  expect(wrapper).toMatchSnapshot();
});
