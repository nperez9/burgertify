import React from 'react';
import classes from './Button.css';
import PropTypes from 'prop-types';

const validTypes = [
  'Success',
  'Danger',
];

const Button = ({ type, children, click }) => {
  return (
    <button 
      className={[classes.Button, classes[type]].join(' ')}
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(validTypes),
};

export default Button;