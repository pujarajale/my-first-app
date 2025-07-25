import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItem = ({ itemName, dueDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div>
        <div className={`row ${styles.rowStyle}`}>
          <div className="col-6">{itemName}</div>
          <div className="col-4">{dueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${styles.todoBtn}`}
              onClick={() => {
                deleteItem(itemName);
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
