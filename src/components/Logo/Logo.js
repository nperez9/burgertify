import React from 'react';

// webpack handles in memory the image optimizes and in build
// this will be replaced by the correct folder (a good way to load it)
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerLogo" />
  </div>
);

export default Logo;