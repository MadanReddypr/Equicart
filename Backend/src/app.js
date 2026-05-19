const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("EquiCart Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});