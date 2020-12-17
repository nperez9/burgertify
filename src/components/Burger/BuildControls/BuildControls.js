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

const buildControls = ({ 
  addIngredient,
  subtractIngredient,
  disabledControls,
  price,
  isPurchasable,
  showModalHandler
}) => {
  const componentControls = controls.map((control) => {  
    return (
      <BuildControl 
        key={control.label} 
        label={control.label} 
        add={() => { addIngredient(control.type) } }   
        subtract={() => { subtractIngredient(control.type) } }
        disable={disabledControls[control.type]}   
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      <div className={classes.BuildControlsContainer}>
        <p>Current Price: {price} </p>
        {componentControls}
        <button
          disabled={!isPurchasable}
          className={classes.OrderButton}
          onClick={showModalHandler}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  subtractIngredient: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
  disabledControls: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  isPurchasable: PropTypes.bool.isRequired,
};

export default buildControls;
