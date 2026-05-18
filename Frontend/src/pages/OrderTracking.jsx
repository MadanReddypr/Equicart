import React from "react";

const OrderTracking = () => {
  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Tracking</h1>

      <ul>
        {steps.map((step, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTracking;