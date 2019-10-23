import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 380,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Electricity',
    note: '',
    amount: 98000,
    createdAt: moment(0)
      .subtract(10, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Transport',
    note: '',
    amount: 6200,
    createdAt: moment(0)
      .add(10, 'days')
      .valueOf()
  }
];
