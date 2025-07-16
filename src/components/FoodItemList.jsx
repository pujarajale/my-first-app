const FoodItemList = ({ foodItem }) => {
  return (
    <>
      <ul className="list-group">
        {/* //Map method for iterating array elements */}
        {foodItem.map((foodItem) => (
          <li key={foodItem} className="list-group-item">
            {foodItem}
          </li>
        ))}
      </ul>
    </>
  );
};
export default FoodItemList;
