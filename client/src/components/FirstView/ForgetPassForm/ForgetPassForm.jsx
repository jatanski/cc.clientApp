import React, { Component } from "react";
import ForgetPassFormView from "./ForgetPassFormView";

export default class ForgetPassForm extends Component {
  ViewProps = {
    changeForm: this.props.changeForm
  };
  render() {
    return <ForgetPassFormView {...this.ViewProps}></ForgetPassFormView>;
  }
}
