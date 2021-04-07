import React from 'react';

import classes from './SideDrawerButton.css';

const SideDrawerButton = ({ openSideDrawHandler }) => {
  return (
    <div className={classes.SideDrawerButton} onClick={openSideDrawHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SideDrawerButton;