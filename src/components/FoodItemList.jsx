import styles from "./FoodItemList.module.css";
const FoodItemList = ({ foodItem, bought, handleClick }) => {
  return (
    <>
      <ul className={styles.listGroup}>
        {/* //Map method for iterating array elements */}
        {foodItem.map((foodItem) => (
          <li
            key={foodItem}
            className={`list-group-item ${styles["listItems"]} ${
              bought && "active"
            }`}
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
