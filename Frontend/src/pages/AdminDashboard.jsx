import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h2>250</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <h2>120</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <h2>₹25,00,000</h2>
        </div>

        <div style={cardStyle}>
          <h3>Pending Orders</h3>
          <h2>12</h2>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
};

export default AdminDashboard;