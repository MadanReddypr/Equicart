const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// CRUD
router.post("/", productController.addProduct);
router.get("/", productController.getProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

// SEARCH
router.get("/search", productController.searchProduct);

module.exports = router;