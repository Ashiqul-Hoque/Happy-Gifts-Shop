import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Product name: {name}</h3>
      <p>Price : ${price}</p>
      <button className="btn" onClick={() => props.addTocart(props.product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
