import React from 'react';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const modal = ({ children, show, closeHandler}) => (
  <>
    <BackDrop show={show} click={closeHandler} />
    <div 
      className={`${classes.Modal} ${show ? classes.Showtime : classes.Hidetime }`}
    >
      {children}
    </div>
  </>
);

export default modal;