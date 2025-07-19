import FoodItemError from "./FoodItemError";
import FoodItemList from "./FoodItemList";
import CommonContainer from "./CommonContainer";
import FoodInput from "./FoodInput";
import { useState } from "react";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  //handling on click event.
  const handleBuyClick = (foodItem) => {
    console.log(`${foodItem} being bought.`);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event?.target?.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <CommonContainer>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={handleOnKeyDown}></FoodInput>
        <FoodItemList
          foodItem={foodItems}
          handleClick={(foodItem) => {
            handleBuyClick(foodItem);
          }}
        ></FoodItemList>
        <FoodItemError foodItem={foodItems}></FoodItemError>
      </CommonContainer>
    </>
  );
};
export default FoodItems;
