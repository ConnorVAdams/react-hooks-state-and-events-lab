import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("")

  function toggleInCart() {
    setInCart((!inCart) ? "in-cart" : "")
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
