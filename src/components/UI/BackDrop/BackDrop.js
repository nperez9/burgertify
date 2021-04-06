import React from 'react';
import classes from './BackDrop.css';
import PropTypes from 'prop-types';

const BackDrop = ({ show, click, children }) => {
  let render = null;
  if (show) {
    render = <div className={classes.Backdrop} onClick={click}></div>
  }
  return render;
}

BackDrop.propTypes = {
  show: PropTypes.bool,
  click: PropTypes.func.isRequired,
}

export default BackDrop;
