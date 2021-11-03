import {React, useState} from "react";

function Item({ name, category }) {
  const [isDark, setIsDark] = useState(false)
  const appClass = isDark ? "in-cart" : ""

  function addToCart(e) {
    setIsDark(!isDark)
  }


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
