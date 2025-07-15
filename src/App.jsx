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
function App() {
  return (
    <>
      <div className="container text-center">
        <ClockApp></ClockApp>
        <ClockHeader></ClockHeader>
        <ClockTime></ClockTime>
      </div>
      {/* <div className="container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div> */}
      {/* <h1>Hello, Welcome to my first react App</h1>
      <Hello></Hello>
      <CButton></CButton>
      <Random></Random> */}
    </>
  );
}

export default App;
