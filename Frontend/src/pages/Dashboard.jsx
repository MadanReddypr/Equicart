import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <h2>25</h2>
        </div>

        <div style={cardStyle}>
          <h3>Cart Items</h3>
          <h2>6</h2>
        </div>

        <div style={cardStyle}>
          <h3>Pending Deliveries</h3>
          <h2>3</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Spending</h3>
          <h2>₹1,20,000</h2>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
};

export default Dashboard;