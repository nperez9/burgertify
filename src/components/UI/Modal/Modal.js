import React from 'react';
import classes from './Modal.css';

const modal = ({ children, show }) => (
  <div 
    className={`${classes.Modal} ${show ? classes.Showtime : classes.Hidetime }`}
  >
    {children}
  </div>
);

export default modal;