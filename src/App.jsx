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

const App = () => {
  const todoList = [
    {
      name: "Play Game",
      dueDate: "14/07/2025",
    },
    {
      name: "Buy Milk",
      dueDate: "14/07/2025",
    },
    {
      name: "Running",
      dueDate: "14/07/2025",
    },
  ];

  return (
    <>
      <h1>Hello, Welcome to my first react App</h1>
      <Hello></Hello>
      <CButton></CButton>
      <Random></Random>
      <div className="container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoList}></TodoItems>
      </div>
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
