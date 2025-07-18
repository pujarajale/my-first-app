import styles from "./FoodInput.module.css";
const FoodInput = ({ handleChange }) => {
  return (
    <>
      <input
        id="foodInput"
        type="text"
        placeholder="Enter custom food input here"
        className={styles.foodInput}
        onChange={handleChange}
      ></input>
    </>
  );
};
export default FoodInput;
