import styles from "./CommonContainer.module.css";
const CommonContainer = (props) => {
  return (
    <>
      <div className={styles.container}>{props?.children}</div>
    </>
  );
};

//or other way to used
// const CommonContainer = ({children}) => {
//   return (
//     <>
//       <div className={styles.container}>{children}</div>
//     </>
//   );
// };

export default CommonContainer;
