const express = require("express");

const router = express.Router();

const {
  dashboard,
  analytics,
  userStats,
} = require("../controllers/adminController");

router.get("/dashboard", dashboard);

router.get("/analytics", analytics);

router.get("/user-stats", userStats);

module.exports = router;