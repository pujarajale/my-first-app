import FoodItemError from "./FoodItemError";
import FoodItemList from "./FoodItemList";

const FoodItems = ({ foodItems }) => {
  // const foodItems = ["Veg Pizza", "Veg Burger", "Paneer Wrap", "Cold Coffee"];
  return (
    <>
      <h1>Food Items List (Using Prop Concept)</h1>
      <FoodItemError foodItem={foodItems}></FoodItemError>
      <FoodItemList foodItem={foodItems}></FoodItemList>
    </>
  );
};
export default FoodItems;
