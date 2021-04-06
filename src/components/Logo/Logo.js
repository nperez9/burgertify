import React from 'react';
import PropTypes from 'prop-types';

// webpack handles in memory the image optimizes and in build
// this will be replaced by the correct folder (a good way to load it)
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = ({ height }) => (
  <div className={classes.Logo} style={{height: height, color: 'red'}}>
    <img src={burgerLogo} alt="BurgerLogo" />
  </div>
);

Logo.propTypes = {
  height: PropTypes.string,
}

export default Logo;