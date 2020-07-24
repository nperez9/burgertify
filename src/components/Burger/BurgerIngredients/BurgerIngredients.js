import React from 'react';
import PropTypes from 'prop-types';

import { INGREDIENTS, getIngredientsList } from '../../../models/BurgerModels';
import classes from './BurgerIngredients.css';

const validTypes = getIngredientsList();

const burgerIngredients = ({ type }) => {
  let ingredient = null;
  const { BreadBottom, BreadTop, Meat, Cheese, Salad, Bacon } = INGREDIENTS;

  switch (type) {
    case BreadBottom:
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case BreadTop:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case Meat:
      ingredient = <div className={classes.Meat}></div>;
      break;
    case Cheese:
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case Salad:
      ingredient = <div className={classes.Salad}></div>;
      break;
    case Bacon:
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      break;
  }

  return ingredient;
};

burgerIngredients.propTypes = {
  type: PropTypes.oneOf(validTypes).isRequired,
};

export default burgerIngredients;
