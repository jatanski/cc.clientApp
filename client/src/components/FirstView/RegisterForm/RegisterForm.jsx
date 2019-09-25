import React, { Component } from "react";
import RegisterFormView from "./RegisterFormView";

class RegisterForm extends Component {
  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  register = e => {
    e.preventDefault();
    console.log("Rejestruje...");
  };

  viewProps = {
    changeForm: this.props.changeForm,
    handleInputChange: this.handleInputChange,
    register: this.register
  };
  render = () => {
    return <RegisterFormView {...this.viewProps}></RegisterFormView>;
  };
}

export default RegisterForm;
