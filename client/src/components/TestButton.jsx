import React from "react";
import { allActions } from "../redux/store";
import { MDBBtn } from "mdbreact";

const TestButton = () => {
  const addNumber = () => allActions.addTest();

  const subtractNumber = () => allActions.subtractTest();

  return (
    <>
      <MDBBtn gradient="peach" onClick={addNumber}>
        +1
      </MDBBtn>
      <MDBBtn gradient="purple" onClick={subtractNumber}>
        -1
      </MDBBtn>
    </>
  );
};

export default TestButton;
