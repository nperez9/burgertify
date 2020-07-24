import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = ({ label, add, subtract }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={subtract}>Less</button>
      <button className={classes.More} onClick={add}>More</button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired
};

export default buildControl;
