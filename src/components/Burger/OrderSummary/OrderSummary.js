import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  // check if the component is pudate
  componentDidUpdate() {
    console.log('Order sumary is updating....');
  }

  render() {
    const { ingredients, cancelHandler, successHandler, price } = this.props;
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
        <p>
          <strong>Total Price: {price.toFixed(2)}</strong>
        </p>
        <p>CheckOut</p>
        <Button type="Danger" click={cancelHandler}>
          CANCEL
        </Button>
        <Button type="Success" click={successHandler}>
          CONTINE
        </Button>
      </>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  cancelHandler: PropTypes.func.isRequired,
  successHandler: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderSummary;
