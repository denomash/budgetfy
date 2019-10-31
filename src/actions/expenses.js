import database from '../firebase/firebase';

// Add expense action
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;

  const expense = { description, note, amount, createdAt };

  return database
    .ref(`users/${uid}/expenses`)
    .push(expense)
    .then(ref => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense
        })
      );
    });
};

// Add expense action
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id }) => (dispatch, getState) => {
  const uid = getState().auth.uid;

  return database
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    })
    .catch(err => {
      console.log('Error removing an expense ', err);
    });
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;

  return database
    .ref(`users/${uid}/expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
};

// SET EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpense = () => (dispatch, getState) => {
  const uid = getState().auth.uid;

  return database
    .ref(`users/${uid}/expenses`)
    .once('value')
    .then(snapshotVal => {
      const expenses = [];
      snapshotVal.forEach(snapshot => {
        expenses.push({
          id: snapshot.key,
          ...snapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
};
