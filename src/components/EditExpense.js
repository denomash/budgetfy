import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  constructor(props) {
    super(props);
  }
  onEditExpense = expense => {
    this.props.editExpense(expense);
    this.props.history.push('/');
  };

  onRemoveExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onEditExpense}
        />

        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addExpense: expense => dispatch(editExpense(props.expense.id, expense)),
    removeExpense: id => dispatch(removeExpense(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
