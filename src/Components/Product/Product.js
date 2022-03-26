import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>Product name: {name}</h4>
      <p className="price">Price : ${price}</p>
      <button
        className="btn"
        onClick={() => props.addTocart(props.product.name)}
      >
        Add to cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
