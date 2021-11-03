import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelected] = useState("All")

  function changeSelection(e) {
    setSelected(e.target.value)
  }

  function byCategory(item) {
    return (selectedCategory === item.category || selectedCategory === "All")
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select  onChange={changeSelection} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          if (byCategory(item)) {
            return <Item key={item.id} name={item.name} category={item.category} />
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
