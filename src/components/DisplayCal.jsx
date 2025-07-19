import styles from "./Calculatorv1.module.css";

const DisplayCal = ({ displayValue }) => {
  return (
    <>
      <input
        className={styles.display}
        type="text"
        placeholder=""
        value={displayValue}
        readOnly
      ></input>
    </>
  );
};

export default DisplayCal;
