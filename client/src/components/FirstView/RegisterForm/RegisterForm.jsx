import React, { Component } from "react";
import RegisterFormView from "./RegisterFormView";
import baseModel from "../../../baseModel";
import { allActions } from "../../../redux/store";

class RegisterForm extends Component {
  state = {
    registerFormName: "",
    registerFormEmail: "",
    registerFormPassword: "",
    registerFormConfirmPassword: "",
    registerFormAdminPassword: "",
    isAdmin: false,
    showSpinner: false,
    showIncorrectPassword: false
  };

  endpoint = "users";

  checkAdminPassword = () => {
    return this.state.isAdmin === "CodersCrew" ? true : false;
  };

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  handleIsAdminFalse = () => this.setState({ isAdmin: false });

  handleIsAdminTrue = () => this.setState({ isAdmin: true });

  register = async e => {
    e.preventDefault();

    if (
      this.state.registerFormPassword !== this.state.registerFormConfirmPassword
    ) {
      this.setState({ showIncorrectPassword: true });
      return;
    }
    try {
      const registerData = {
        name: this.state.registerFormName,
        email: this.state.registerFormEmail,
        password: this.state.registerFormPassword
      };

      this.setState({ showSpinner: true }, async () => {
        console.log("Try register...");
        const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerData)
        });

        const type = response.headers.get("Content-Type");
        const token = response.headers.get("x-auth-token");

        if (type.indexOf("text") >= 0) {
          const data = await response.text();

          console.log(data);
        } else {
          const data = await response.json();

          console.log(response);

          baseModel.saveAuthToken(token);
          baseModel.save("user", data);
          console.log("Logging...");
          allActions.logIn();
          this.props.history.push("/subscription");
        }
      });
    } catch (error) {
      this.setState({ showSpinner: false });
      console.error(error);
    }
  };

  viewProps = {
    changeForm: this.props.changeForm,
    handleInputChange: this.handleInputChange,
    register: this.register,
    isAdminTrue: this.handleIsAdminTrue,
    isAdminFalse: this.handleIsAdminFalse
  };
  render = () => {
    return (
      <RegisterFormView
        showSpinner={this.state.showSpinner}
        showAdminInput={this.state.isAdmin}
        showIncorrectPassword={this.state.showIncorrectPassword}
        {...this.viewProps}
      ></RegisterFormView>
    );
  };
}

export default RegisterForm;
