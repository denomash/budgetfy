import React from 'react';

const EditExpense = props => {
  console.log(props);
  return <div>This is the Edit expense id {props.match.params.id}</div>;
};

export default EditExpense;
