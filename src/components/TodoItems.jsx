import { useContext, useReducer } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div>
        {todoItems?.map((items) => (
          <TodoItem
            key={items.itemName}
            itemName={items?.itemName}
            dueDate={items?.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
