import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.5,
  meat: 2,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredents] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(5);

  const addIngredientHandler = (type) => {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredents(newIngredients);
    const price = totalPrice + INGREDIENTS_PRICE[type];
    setTotalPrice(price);
  };

  const subtractIngredientHandler = (type) => {
    const newIngredients = { ...ingredients };
    if (newIngredients[type] === 0) {
      alert(`You can't substract ${type} ingredient`);
      return;
    }
    newIngredients[type]--;
    setIngredents(newIngredients);
    const price = totalPrice - INGREDIENTS_PRICE[type];
    setTotalPrice(price);
  };

  const disableInfo = {
    ...ingredients,
  };
  for (let key in disableInfo) {
    disableInfo[key] = ingredients[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredient={addIngredientHandler}
        subtractIngredient={subtractIngredientHandler}
        disabledControls={disableInfo}
        price={totalPrice}
      />
      <div>{totalPrice}</div>
    </>
  );
};

export default BurgerBuilder;
