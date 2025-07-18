import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <input
        id="foodInput"
        type="text"
        placeholder="Enter custom food input here"
        className={styles.foodInput}
        onChange={(event) => {
          handleOnChange(event);
        }}
      ></input>
    </>
  );
};
export default FoodInput;
