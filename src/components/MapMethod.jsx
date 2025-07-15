const MapMethod = () => {
  let foodItems = ["Milk", "roti", "dal", "rice", "fresh vegitable"];
  return (
    <>
      <h1>Food Items List</h1>
      {/* //Coditional Rendering */}
      {foodItems.length == 0 ? <div>Fooditems List is Empty</div> : null}
      {/* //we can write rendering using logical operators also */}
      {/* {foodItems.length === 0 && <div>Food items List is Empty.</div>} */}
      <ul className="list-group">
        {/* //Map method Uses */}
        {foodItems.map((foodItems) => (
          <li key={foodItems} className="list-group-item">
            {foodItems}
          </li>
        ))}
      </ul>
    </>
  );
};
export default MapMethod;
