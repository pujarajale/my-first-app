import styles from "./Calculatorv1.module.css";
import ButtonsCal from "./ButtonsCal";
import DisplayCal from "./DisplayCal";
const Calculatorv1 = () => {
  return (
    <>
      <div className={styles.calculator}>
        <DisplayCal></DisplayCal>
        <ButtonsCal></ButtonsCal>
      </div>
    </>
  );
};
export default Calculatorv1;
