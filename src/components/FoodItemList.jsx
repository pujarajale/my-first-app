import styles from "./FoodItemList.module.css";
const FoodItemList = ({ foodItem, handleClick }) => {
  //or we can write other way
  // const handleOnBuyButtonClick = (foodItem) => {
  //   console.log(`${foodItem} being bought.`);
  // };
  return (
    <>
      <ul className={styles.listGroup}>
        {/* //Map method for iterating array elements */}
        {foodItem.map((foodItem) => (
          <li
            key={foodItem}
            className={`list-group-item ${styles["listItems"]}`}
          >
            <span className={styles.items}>{foodItem}</span>
            <button
              type="button"
              className={`btn btn-info ${styles["buyButton"]}`}
              onClick={() => handleClick(foodItem)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FoodItemList;
