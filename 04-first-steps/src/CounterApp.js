import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  const handleRest = (e) => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRest}>-1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
