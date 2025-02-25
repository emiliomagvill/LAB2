import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = React.useState(value);

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;