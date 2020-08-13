import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = ({ label, add, subtract, disable }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={subtract} disabled={disable}>Less</button>
      <button className={classes.More} onClick={add}>More</button>
    </div>
  );
};

buildControl.defaultProps = {
  disable: false
}

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  disable: PropTypes.bool
};

export default buildControl;
