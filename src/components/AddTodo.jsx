import { useContext, useRef } from "react";
import styles from "./TodoItem.module.css";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const onHandleButtonClick = (event) => {
    event.preventDefault();
    const itemName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(itemName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
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
