import styles from "./Calculatorv1.module.css";

const ButtonsCal = () => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttons) => (
          <button key={buttons} className={styles.calButton}>
            {buttons}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsCal;
