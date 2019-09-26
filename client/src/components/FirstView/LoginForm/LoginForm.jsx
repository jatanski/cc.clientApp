import React, { Component } from "react";
import LoginFormView from "./LoginFormView";
import baseModel from "../../../baseModel";
import { allActions } from "../../../redux/store";

class LoginForm extends Component {
  state = {
    showSpinner: false
  };

  endpoint = "";

  handleEmailInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  login = async e => {
    e.preventDefault();
    console.log("Try logging...");

    try {
      const loginData = {};
      this.setState({ showSpinner: true }, async () => {
        const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData)
        });

        const type = response.headers.get("Content-Type");
        const token = response.headers.get("x-auth-token");

        if (type.indexOf("text") >= 0) {
          const data = await response.text();

          console.log(data);
        } else {
          const data = await response.json();

          baseModel.saveAuthToken(token);
          baseModel.save("user", data);
          console.log("Logging...");
          allActions.logIn();
        }
      });
    } catch (error) {
      this.setState({ showSpinner: false });
      console.error(error);
    }
  };

  loginFormProps = {
    handleInputChange: this.handleInputChange,
    login: this.login,
    changeFormToRegister: this.props.changeFormToRegister,
    changeFormToForgetPass: this.props.changeFormToForgetPass
  };

  render = () => {
    return (
      <LoginFormView
        showSpinner={this.state.showSpinner}
        {...this.loginFormProps}
      ></LoginFormView>
    );
  };
}

export default LoginForm;
