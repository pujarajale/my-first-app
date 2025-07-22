import styles from "./TodoItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
const TodoItem = ({ itemName, itemDate, onDeleteClick }) => {
  return (
    <>
      <div>
        <div className={`row ${styles.rowStyle}`}>
          <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${styles.todoBtn}`}
              onClick={() => {
                onDeleteClick(itemName);
              }}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
