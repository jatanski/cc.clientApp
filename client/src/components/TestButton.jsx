import React from 'react';
import { allActions } from '../redux/store';

const TestButton = () => {
  const addNumber = () => allActions.addTest();
  const subtractNumber = () => allActions.subtractTest();

  return (
    <>
      <button className="add" onClick={addNumber}>
        +1
      </button>
      <button className="subtract" onClick={subtractNumber}>
        -1
      </button>
    </>
  );
};

export default TestButton;
