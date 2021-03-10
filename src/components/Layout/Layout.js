import React from 'react';

import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ({ children }) => {
  return (
    <>
      <Toolbar></Toolbar>
      <main className={classes.content}>{ children }</main>
    </>
  )
}

export default layout;