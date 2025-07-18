import FoodItemError from "./FoodItemError";
import FoodItemList from "./FoodItemList";
import CommonContainer from "./CommonContainer";
import FoodInput from "./FoodInput";
import { useState } from "react";

const FoodItems = ({ foodItems }) => {
  // const foodItems = ["Veg Pizza", "Veg Burger", "Paneer Wrap", "Cold Coffee"];
  const [textToShow, setTextToShow] = useState("Food item entered by user.");
  //handling on click event.
  const handleBuyClick = (foodItem) => {
    console.log(`${foodItem} being bought.`);
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };
  return (
    <>
      <CommonContainer>
        <h1>Healthy Food</h1>
        <FoodInput handleChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
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
