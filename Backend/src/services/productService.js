const Product = require("../models/Product");

const productService = {
  async saveProduct(data) {
    return await Product.create(data);
  },

  async getAllProducts() {
    return await Product.findAll();
  },

  async updateLogic(id, data) {
    return await Product.update(id, data);
  },

  async deleteLogic(id) {
    return await Product.delete(id);
  },

  async searchLogic(keyword) {
    return await Product.search(keyword);
  }
};

module.exports = productService;