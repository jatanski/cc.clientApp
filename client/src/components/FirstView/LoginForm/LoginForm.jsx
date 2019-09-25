import React, { Component } from "react";
import LoginFormView from "./LoginFormView";

class LoginForm extends Component {
  state = {
    loginFormEmail: "",
    loginFormPassword: ""
  };

  login = e => {
    e.preventDefault();
    console.log("Próbuje zalogować...");
  };

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  loginFormProps = {
    handleInputChange: this.handleInputChange,
    login: this.login,
    changeFormToRegister: this.props.changeFormToRegister,
    changeFormToForgetPass: this.props.changeFormToForgetPass
  };

  render = () => {
    return <LoginFormView {...this.loginFormProps}></LoginFormView>;
  };
}

export default LoginForm;
