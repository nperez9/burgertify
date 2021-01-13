import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
  const [isPurchasable, setIsPurchasable] =  useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const updatePurchasable = (ingredients) => {
    const ingredientSum =  Object.keys({...ingredients}).map(ikey => {
      return ingredients[ikey];
    }).reduce((acum, i) => acum + i, 0);

    setIsPurchasable(ingredientSum > 0);
  }

  const addIngredientHandler = (type) => {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredents(newIngredients);
    const price = totalPrice + INGREDIENTS_PRICE[type];
    setTotalPrice(price);
    updatePurchasable(newIngredients);
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
    updatePurchasable(newIngredients);
  };

  const showModalHandler = (show) => {
    setIsOrdered(show);
  }

  const disableInfo = {
    ...ingredients,
  };
  for (let key in disableInfo) {
    disableInfo[key] = ingredients[key] <= 0;
  }

  return (
    <>
      <Modal 
        show={isOrdered} 
        closeHandler={() => showModalHandler(false)}
      >
        <OrderSummary ingredients={ingredients} />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredient={addIngredientHandler}
        subtractIngredient={subtractIngredientHandler}
        disabledControls={disableInfo}
        price={totalPrice}
        isPurchasable={isPurchasable}
        showModalHandler={showModalHandler}
      />
    </>
  );
};

export default BurgerBuilder;
