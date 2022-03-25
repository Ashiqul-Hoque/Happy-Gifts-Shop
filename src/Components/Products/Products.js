import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text">Happy Gifts Shop</h1>
      <div className="shop">
        <div className="products-container">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
        <div className="cart">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
