import { createContext, useReducer } from "react";
import TodoItems from "../components/TodoItems";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        itemName: action?.payload?.itemName,
        dueDate: action?.payload?.dueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item?.itemName !== action?.payload?.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
