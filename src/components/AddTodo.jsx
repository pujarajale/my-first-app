import { useState } from "react";
import styles from "./TodoItem.module.css";
import { MdAddBox } from "react-icons/md";
const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event?.target?.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event?.target?.value);
  };
  const onHandleButtonClick = (event) => {
    event.preventDefault();
    console.log(event);
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
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
              value={todoName}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              value={dueDate}
              onChange={handleDateChange}
            ></input>
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
