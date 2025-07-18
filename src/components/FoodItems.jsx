import FoodItemError from "./FoodItemError";
import FoodItemList from "./FoodItemList";
import CommonContainer from "./CommonContainer";
import FoodInput from "./FoodInput";
//  (Using Prop Concept)
const FoodItems = ({ foodItems }) => {
  // const foodItems = ["Veg Pizza", "Veg Burger", "Paneer Wrap", "Cold Coffee"];
  const handleBuyClick = (foodItem) => {
    console.log(`${foodItem} being bought.`);
  };
  return (
    <>
      <CommonContainer>
        <h1>Healthy Food</h1>
        <FoodInput></FoodInput>
        <FoodItemError foodItem={foodItems}></FoodItemError>
        <FoodItemList
          foodItem={foodItems}
          handleClick={(foodItem) => {
            handleBuyClick(foodItem);
          }}
        ></FoodItemList>
      </CommonContainer>
    </>
  );
};
export default FoodItems;
