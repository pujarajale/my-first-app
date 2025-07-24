import { useRef } from "react";
import styles from "./TodoItem.module.css";
import { MdAddBox } from "react-icons/md";
const AddTodo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const onHandleButtonClick = (event) => {
    event.preventDefault();
    const itemName = todoNameElement.current.value;
    const itemDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(itemName, itemDate);
  };

  return (
    <>
      <div>
        <form
          onSubmit={onHandleButtonClick}
          className={`row ${styles.rowStyle}`}
        >
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              ref={todoNameElement}
            ></input>
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement}></input>
          </div>
          <div className="col-2">
            <button
              type="submit"
              className={`btn btn-success ${styles.todoBtn}`}
            >
              <MdAddBox />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
