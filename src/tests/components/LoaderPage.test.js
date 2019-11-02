import React from 'react';
import { shallow } from 'enzyme';
import LoaderPage from '../../components/LoaderPage';

test('Should render loading page correctly', () => {
  const wrapper = shallow(<LoaderPage />);

  expect(wrapper).toMatchSnapshot();
});
