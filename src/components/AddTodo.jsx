import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event?.target?.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event?.target?.value);
  };
  const onHandleButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div>
        <div className="row">
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
              type="button"
              className="btn btn-success todoBtn"
              onClick={onHandleButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
