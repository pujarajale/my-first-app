import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="item-container">
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            itemName={items?.name}
            itemDate={items?.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
