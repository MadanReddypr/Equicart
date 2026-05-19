const express = require("express");

const router = express.Router();

const {
  processPayment,
  generateInvoice,
} = require("../controllers/paymentController");

router.post("/process", processPayment);

router.post("/invoice", generateInvoice);

module.exports = router;