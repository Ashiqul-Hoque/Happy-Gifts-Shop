import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const items = props.cart;

  return (
    <div className="cart">
      <div>
        <h1>Cart</h1>
        <h3>Product List:</h3>
      </div>

      <div className="product-list">
        {items.map((item) => (
          <div className="list">
            <li key={item.id}>{item.name}</li>
            <img className="cart-img" src={item.img} alt="" />
          </div>
        ))}
      </div>

      <div>
        <button className="btn-one" onClick={() => props.chooseOne()}>
          Choose 1 for me
        </button>
        <button className="btn-clear" onClick={() => props.clearAll()}>
          Choose again
        </button>
      </div>
    </div>
  );
};

export default Cart;
