function TodoItem1() {
  let itemName = "BuyMilk";
  let itemDate = "14/07/2025";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todoBtn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem1;
