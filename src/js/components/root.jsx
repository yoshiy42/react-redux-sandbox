import React from 'react';
import PropTypes from 'prop-types';

const Root = props => (
  <div className="root">
    <button className="btn--counter__decrement" onClick={props.rootActions.decrement}>-1</button>
    {props.root.counter}
    <button className="btn--counter__increment" onClick={props.rootActions.increment}>+1</button>
  </div>
);

Root.propTypes = {
  root: PropTypes.shape({
    counter: PropTypes.number.isRequired
  }).isRequired,
  rootActions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }).isRequired
};

export default Root;
