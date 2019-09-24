import React, { Component } from "react";
import TestDisplay from "./TestDisplay";
import "./test.scss";

export default class Test extends Component {
  state = {
    numberOfparagraph: [1, 2, 3, 4]
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return this.state.numberOfparagraph.map(p => {
      return <TestDisplay></TestDisplay>;
    });
  }
}
