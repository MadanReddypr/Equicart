const PDFDocument = require("pdfkit");
const fs = require("fs");

const {
  processPaymentService,
} = require("../services/paymentService");

exports.processPayment = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    const payment = await processPaymentService(
      userId,
      amount
    );

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.generateInvoice = async (req, res) => {
  try {
    const { paymentId, userId, amount } = req.body;

    const doc = new PDFDocument();

    const fileName = `invoice-${paymentId}.pdf`;

    doc.pipe(fs.createWriteStream(fileName));

    doc.fontSize(20).text("EquiCart Invoice");

    doc.moveDown();

    doc.text(`Payment ID: ${paymentId}`);
    doc.text(`User ID: ${userId}`);
    doc.text(`Amount: ₹${amount}`);

    doc.end();

    res.status(200).json({
      success: true,
      message: "Invoice generated",
      fileName,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};