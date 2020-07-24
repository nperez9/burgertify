export const INGREDIENTS = {
  BreadBottom: 'bread-bottom',
  BreadTop: 'bread-top',
  Meat: 'meat',
  Cheese: 'cheese',
  Salad: 'salad',
  Bacon: 'bacon',
};

/**
 * Return the enum INGREDIENTS as an Array
 * @return [string]
 */
export function getIngredientsList() {
  return Object.keys(INGREDIENTS).map(ingredientKey => {
    return INGREDIENTS[ingredientKey];
  });
} 
