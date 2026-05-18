import React from "react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      product: "Laptop",
      amount: 55000,
      status: "Delivered",
    },
    {
      id: 2,
      product: "Headphones",
      amount: 3000,
      status: "Pending",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>₹{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;