import React from 'react';

import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends React.Component {
  // for better performance
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  
  render() {
    const { children, show, closeHandler} = this.props;

    return (
      <>
        <BackDrop show={show} click={closeHandler} />
        <div 
          className={`${classes.Modal} ${show ? classes.Showtime : classes.Hidetime }`}
        >
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
