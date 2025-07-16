const FoodItemError = ({ foodItem }) => {
  return <>{foodItem.length === 0 ? <p>Food Item list is empty.</p> : null}</>;
};

export default FoodItemError;
