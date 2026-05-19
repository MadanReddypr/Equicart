const productService = require("../services/productService");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const result = await productService.saveProduct(req.body);
    res.status(201).json({
      message: "Product added successfully",
      data: result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const result = await productService.updateLogic(req.params.id, req.body);
    res.json({ message: "Updated successfully", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteLogic(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH PRODUCT
exports.searchProduct = async (req, res) => {
  try {
    const result = await productService.searchLogic(req.query.q);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};