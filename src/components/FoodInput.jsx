import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        id="foodInput"
        type="text"
        placeholder="Enter custom food input here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};
export default FoodInput;
