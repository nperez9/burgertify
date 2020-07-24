import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = ({ ingredients }) => {
  let parsedIngredients = Object.keys(ingredients).map((ingKey) => {
    return [...Array(ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredients type={ingKey} key={ingKey + i} />;
    });
  })
  .reduce((arr, elem) => arr.concat(elem), []);

  if (!parsedIngredients.length) {
    parsedIngredients = <p>Plase, start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {parsedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
