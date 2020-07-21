import React from 'react';

import classes from './Layout.css';

const layout = ({ children }) => {
  return (
    <>
      <div>Sidebar, toolbar,etc</div>
      <main className={classes.content}>{ children }</main>
    </>
  )
}

export default layout;