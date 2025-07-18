import styles from "./FoodItemList.module.css";
const FoodItemList = ({ foodItem }) => {
  return (
    <>
      <ul className={styles.listGroup}>
        {/* //Map method for iterating array elements */}
        {foodItem.map((foodItem) => (
          <li key={foodItem} className={`list-group-item ${styles["items"]}`}>
            <span>{foodItem}</span>
            <button className={styles.item}>Buy</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FoodItemList;
