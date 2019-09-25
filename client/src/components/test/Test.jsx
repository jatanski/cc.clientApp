import React, { Component } from "react";
import { connect } from "react-redux";
import TestDisplay from "./TestDisplay";
import "./test.scss";

class Test extends Component {
  componentDidMount = () => {};

  componentDidUpdate = () => {};

  displayProps = {
    testProps: "testowy props"
  };

  render() {
    return <TestDisplay {...this.displayProps}></TestDisplay>;
  }
}

const mapStateToProps = state => ({
  testNumber: state.test.testStatus
});

export default connect(
  mapStateToProps,
  {}
)(Test);
