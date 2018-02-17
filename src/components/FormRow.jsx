import React, { Component } from 'react';
import propTypes from 'prop-types';

class FormRow extends Component {
  state = {inputValue: ''};
  changeTextHandler = e => {
    this.setState({inputValue: e.target.value})
  };
  render() {
    return (
      <div>
        <label>{this.props.labelText}</label>
        <input 
          type={this.props.type} 
          placeholder={this.props.labelText} 
          onChange={this.changeTextHandler}  
          required={this.props.isrequired}
        />
      </div>
    );
  }
}

FormRow.propTypes = {
  type: propTypes.string.isRequired,
  placeholder: propTypes.string,
  isrequired: propTypes.bool.isRequired
};

export default FormRow;