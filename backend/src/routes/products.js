const { Router } = require("express");
const products = Router();
const jsonProducts = require("../mockup/products.json");
const { Product } = require("../db");

products.get("/", async (req, res) => {
  res.json(jsonProducts);
});
/* products.post("/", async (req, res, next) => {
  const {
    name,
    description,
    mainImg,
    imgs,
    supplier,
    categories,
    salePrice,
    purchasePrice,
    stock,
    discount,
  } = req.body;
  try {
    const [product,created] = await Product.findOrCreate(
      {
        name,
        description,
        mainImg,
        supplier,
        salePrice,
        purchasePrice,
        stock,
        discount,
      }
    )
  } catch (error) {
    next()
  }
  res.json(jsonProducts);
}); */

module.exports = products;
