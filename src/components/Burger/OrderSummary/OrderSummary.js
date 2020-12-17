import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ ingredients }) => {
  const ingredientsRender = Object.keys(ingredients).map((iKey) => {
    return (
      <li key={iKey}>
        <span style={{ textTransform: 'capitalize' }}>{iKey}:</span>
        {ingredients[iKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your order!</h3>
      <p>a delicius burguer with this ingredients</p>
      <ul>{ingredientsRender}</ul>
      <p>CheckOut</p>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default OrderSummary;
