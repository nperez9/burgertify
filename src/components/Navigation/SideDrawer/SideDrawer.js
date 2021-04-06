import React from 'react';

import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';

const SideDrawer = ({ isOpen, close }) => {
  const animation = (isOpen) ? classes.Open : classes.Close;
  console.info(animation);

  return (
    <>
      <BackDrop show={isOpen} click={close}/>
      <div className={`${classes.SideDrawer} ${animation}`}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
