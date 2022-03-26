import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Product:</p>
      {cart.map((item) => {
        console.log(item);
        <p>{item}</p>;
      })}

      <div>
        <button className="btn-one">Choose 1 for me</button>
        <button className="btn-clear">Choose again</button>
      </div>
    </div>
  );
};

export default Cart;
