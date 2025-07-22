import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            itemName={items?.name}
            itemDate={items?.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
