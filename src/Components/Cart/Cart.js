import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  for (const product of cart) {
    let newName = product.name;
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Product:</p>
      <button>button</button>
      <button>button</button>
    </div>
  );
};

export default Cart;
