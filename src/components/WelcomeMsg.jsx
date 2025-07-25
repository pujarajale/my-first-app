import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return <>{todoItems?.length === 0 && <p>Enjoy your day.</p>}</>;
};
export default WelcomeMsg;
