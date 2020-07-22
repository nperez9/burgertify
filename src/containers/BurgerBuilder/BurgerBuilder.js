import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';

const BurgerBuilder = () => {
  const [ingredients, setIngredents] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Burger Controls</div>
    </>
  );
};

export default BurgerBuilder;
