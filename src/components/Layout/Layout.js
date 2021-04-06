import React from 'react';

import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{ children }</main>
    </>
  )
}

export default layout;