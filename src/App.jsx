import "./App.css";
import CButton from "./CButton";
import Hello from "./Hello";
import Random from "./Random";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ClockApp from "./components/ClockApp";
import ClockHeader from "./components/ClockHeader";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import ClockTime from "./components/ClockTime";
import MapMethod from "./components/MapMethod";
import FoodItems from "./components/foodItems";
const App = () => {
  const foodItemsArr = [
    "Veg Pizza",
    "Veg Burger",
    "Paneer Wrap",
    "Cold Coffee",
  ];
  return (
    <>
      <h1>Hello, Welcome to my first react App</h1>
      <Hello></Hello>
      <CButton></CButton>
      <Random></Random>
      <div className="container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
      <div className="container text-center">
        <ClockApp></ClockApp>
        <ClockHeader></ClockHeader>
        <ClockTime></ClockTime>
      </div>
      <MapMethod></MapMethod>
      <FoodItems foodItems={foodItemsArr}></FoodItems>
    </>
  );
};

export default App;
