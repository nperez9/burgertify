import React from 'react';
import PropTypes from 'prop-types';

import { INGREDIENTS } from '../../../models/BurgerModels';
import BuildControl from './BuildControl';
import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: INGREDIENTS.Salad },
  { label: 'Bacon', type: INGREDIENTS.Bacon },
  { label: 'Cheese', type: INGREDIENTS.Cheese },
  { label: 'Meat', type: INGREDIENTS.Meat },
];

const buildControls = ({ addIngredient, subtractIngredient }) => {
  const componentControls = controls.map((control) => {  
    return (
      <BuildControl 
        key={control.label} 
        label={control.label} 
        add={() => { addIngredient(control.type) } }   
        subtract={() => { subtractIngredient(control.type) } }   
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      {componentControls}
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  subtractIngredient: PropTypes.func.isRequired,
};

export default buildControls;
