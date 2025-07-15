function TodoItem1() {
  let itemName = "BuyMilk";
  let itemDate = "14/07/2025";
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-6">{itemName}</div>
          <div class="col-4">{itemDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger todoBtn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem1;
