import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    }
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              value={filters.text}
              onChange={this.onTextChange}
            />
          </div>

          <div className="input-group__item">
            <select value={filters.sortBy} onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker
              startDate={filters.startDate}
              endDate={filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate)),
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
