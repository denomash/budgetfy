import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('Should generate set start date object', () => {
  const startDateAction = setStartDate(moment(0));

  expect(startDateAction).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('Should generate set end date object', () => {
  const endDateAction = setEndDate(moment(0));

  expect(endDateAction).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('Should sort by date', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('Should generate sort by amount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('Should set text filter using provided object', () => {
  const text = 'rent';

  expect(setTextFilter(text)).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('Should set text filter using default object', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
