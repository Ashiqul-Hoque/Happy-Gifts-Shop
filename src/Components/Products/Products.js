import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addTocart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <h1 className="text">Happy Gifts Shop</h1>
      <div className="shop">
        <div className="products-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addTocart={addTocart}
            ></Product>
          ))}
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
