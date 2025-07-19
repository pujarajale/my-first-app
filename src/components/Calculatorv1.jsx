import styles from "./Calculatorv1.module.css";
import ButtonsCal from "./ButtonsCal";
import DisplayCal from "./DisplayCal";
import { useState } from "react";
const Calculatorv1 = () => {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalValue = calVal + buttonText;
      setCalVal(newCalValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <DisplayCal displayValue={calVal}></DisplayCal>
        <ButtonsCal
          onButtonClick={(buttonText) => {
            onButtonClick(buttonText);
          }}
        ></ButtonsCal>
      </div>
    </>
  );
};
export default Calculatorv1;
