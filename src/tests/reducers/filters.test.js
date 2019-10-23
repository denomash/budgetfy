import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' };

  const state = filterReducer(undefined, action);

  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy amount', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };

  const state = filterReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'info' };

  const state = filterReducer(undefined, action);

  expect(state.text).toBe('info');
});

test('Should set startDate Filter', () => {
  const action = { type: 'SET_START_DATE', startDate: '1000' };

  const state = filterReducer(undefined, action);

  expect(state.startDate).toBe('1000');
});

test('Should set endDate Filter', () => {
  const action = { type: 'SET_END_DATE', endDate: '3500' };

  const state = filterReducer(undefined, action);

  expect(state.endDate).toBe('3500');
});
