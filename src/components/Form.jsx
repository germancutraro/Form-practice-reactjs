import React, { Component } from "react";
import FormRow from "./FormRow";

class Form extends Component {

  state = {
    signup: ''
  };

  submitFormHandler = e => {
    e.preventDefault();
    let name = this.refs.name.state.inputValue,
      surname = this.refs.surname.state.inputValue,
      pass = this.refs.password.state.inputValue;

   if (name.length > 5 && surname.length > 2 && pass.length > 5) {
     this.setState({signup: 'Cool!'})
   } else {
     alert('Error! Verify your data!')
   }  
    
  };

  render() {
    return (
      <div className="form">
        <h1>Form</h1>
        <form onSubmit={this.submitFormHandler}>
          <FormRow type="text" labelText="Name" isrequired={true} ref="name" />
          <FormRow
            type="text"
            labelText="Surname"
            isrequired={true}
            ref="surname"
          />
          <FormRow
            type="password"
            labelText="Password"
            isrequired={true}
            ref="password"
          />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.signup}</p>
      </div>
    );
  }
}

export default Form;
