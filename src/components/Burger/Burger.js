import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = ({ ingredients }) => {
  const parsedIngredients = Object.keys(ingredients).map((ingKey) => {
    return [...Array(ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredients type={ingKey} key={ingredients[ingKey] + i} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {parsedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
