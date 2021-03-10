import React from 'react';
import clasess from './NavigationItems.css';

import NavItem from './NavItem';

const NavigationItems = () => (
  <ul className={clasess.NavigationItems}>
    { 
      // can pass boolean props as true only putting the name
    }
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default NavigationItems;