import styles from "./TodoItem.module.css";
const TodoItem = ({ itemName, itemDate, onDeleteClick }) => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${styles.todoBtn}`}
              onClick={() => {
                onDeleteClick(itemName);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
