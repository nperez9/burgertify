import React, { useState } from 'react';

import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  const [isSideDrawOpen, setIsSideDrawOpen] = useState(false);
  
  const sideDrawHanlder = (isOpen) => {
    setIsSideDrawOpen(isOpen);
  }

  return (
    <>
      <Toolbar openSideDraw={() => {sideDrawHanlder(true)}} />
      <SideDrawer isOpen={isSideDrawOpen} close={() => {sideDrawHanlder(false)}}/>
      <main className={classes.content}>{ children }</main>
    </>
  )
}

export default Layout;
