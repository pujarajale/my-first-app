import FoodItemError from "./FoodItemError";
import FoodItemList from "./FoodItemList";
import CommonContainer from "./CommonContainer";
//  (Using Prop Concept)
const FoodItems = ({ foodItems }) => {
  // const foodItems = ["Veg Pizza", "Veg Burger", "Paneer Wrap", "Cold Coffee"];
  return (
    <>
      <CommonContainer>
        <h1>Healthy Food</h1>
        <FoodItemError foodItem={foodItems}></FoodItemError>
        <FoodItemList foodItem={foodItems}></FoodItemList>
      </CommonContainer>
    </>
  );
};
export default FoodItems;
