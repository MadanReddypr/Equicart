import React from "react";

const CartCard = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{item.name}</h3>

      <p>Price: ₹{item.price}</p>

      <button>Remove</button>
    </div>
  );
};

export default CartCard;