import React from "react";
import { connect } from "react-redux";

const TestDisplay = ({ testNumber, testProps }) => {
  return (
    <>
      <p>Props przekazany z komponentu wyżej - {testProps}</p>
      <p className="test">Aktualna liczba testowa: {testNumber} </p>
    </>
  );
};

const mapStateToProps = state => ({
  testNumber: state.test.testStatus
});

export default connect(mapStateToProps)(TestDisplay);
