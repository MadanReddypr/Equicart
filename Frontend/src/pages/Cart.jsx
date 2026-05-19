import React from "react";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "Mouse",
      price: 1500,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;