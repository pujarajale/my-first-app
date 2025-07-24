import "./App.css";
import CButton from "./CButton";
import Hello from "./Hello";
import Random from "./Random";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import ClockApp from "./components/ClockApp";
import ClockHeader from "./components/ClockHeader";
import TodoItems from "./components/TodoItems";
import ClockTime from "./components/ClockTime";
import MapMethod from "./components/MapMethod";
import FoodItems from "./components/FoodItems";
import Calculatorv1 from "./components/Calculatorv1";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, dueDate) => {
    setTodoItems((preItems) => [
      ...preItems,
      { name: itemName, dueDate: dueDate },
    ]);
  };
  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="container">
        <TodoName></TodoName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems?.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>

      <h1>Hello, Welcome to my first react App</h1>
      <Hello></Hello>
      <CButton></CButton>
      <Random></Random>

      <div className="container text-center">
        <ClockApp></ClockApp>
        <ClockHeader></ClockHeader>
        <ClockTime></ClockTime>
      </div>
      <MapMethod></MapMethod>
      <FoodItems></FoodItems>
      <Calculatorv1></Calculatorv1>
    </>
  );
};

export default App;
