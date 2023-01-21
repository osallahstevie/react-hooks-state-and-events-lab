import React, { useState } from "react";

function Item({ name, category }) {

  // state variable to keep track of whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // use state variable to determine className for li element
  const liClass = inCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add"
        onClick={() => setInCart(!inCart)}>
          {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

