import React, { Component } from 'react';
import { SingleDatePicker as ReactDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './DatePicker.scss';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';

class DatePicker extends Component {
  state = {
    focused: false,
  };

  handleDatePickerFocusChange = state => {
    if ('onFocusChange' in this.props) {
      this.props.onFocusChange(state.focused);
    } else {
      this.setState({
        focused: state.focused,
      });
    }
  };

  handleOnChange = momentDate => {
    const { name, onDateChange } = this.props;
    // create dummy event for changeHandler's of forms
    const event = {
      target: {
        name: name,
        value: momentDate && momentDate,
      },
    };

    onDateChange(event);
  };

  render() {
    const { date, className, style, openDirection, error, name, hideInput, isFocused, ...rest } = this.props;

    let focused = null;
    if ('isFocused' in this.props) {
      focused = this.props.isFocused;
    } else {
      focused = this.state.focused;
    }

    return (
      <div className={`datePickerWrapper ${className} ${openDirection} ${hideInput && 'hiddenInput'}`} style={style}>
        <ReactDatePicker
          {...rest}
          verticalSpacing={15}
          openDirection={openDirection}
          noBorder
          numberOfMonths={1}
          displayFormat="DD MMM YYYY"
          isOutsideRange={() => false}
          id="SingleDatePicker"
          date={date}
          onDateChange={this.handleOnChange}
          focused={focused}
          onFocusChange={this.handleDatePickerFocusChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

DatePicker.propTypes = {
  isFocused: PropTypes.bool,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  hideInput: PropTypes.bool,
  date: PropTypes.any,
  onDateChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func,
  error: PropTypes.string,
};

export default DatePicker;
