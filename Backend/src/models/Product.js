const db = require("../config/db");

const Product = {
  async create(data) {
    const [result] = await db.query(
      `INSERT INTO products (name, description, price, category, stock, image)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [data.name, data.description, data.price, data.category, data.stock, data.image]
    );
    return result;
  },

  async findAll() {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },

  async update(id, data) {
    const [result] = await db.query(
      `UPDATE products 
       SET name=?, description=?, price=?, category=?, stock=?, image=? 
       WHERE id=?`,
      [data.name, data.description, data.price, data.category, data.stock, data.image, id]
    );
    return result;
  },

  async delete(id) {
    const [result] = await db.query("DELETE FROM products WHERE id=?", [id]);
    return result;
  },

  async search(keyword) {
    const [rows] = await db.query(
      `SELECT * FROM products 
       WHERE name LIKE ? OR category LIKE ?`,
      [`%${keyword}%`, `%${keyword}%`]
    );
    return rows;
  }
};

module.exports = Product;