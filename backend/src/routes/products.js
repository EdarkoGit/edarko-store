const { Router } = require("express");
const products = Router();
const jsonProducts = require("../mockup/products.json");
const { Product } = require("../db");

products.post("/", async (req, res, next) => {
  const {
    name,
    description,
    mainImg,
    images,
    supplier,
    categories,
    salePrice,
    purchasePrice,
    stock,
    discount,
  } = req.body;
  try {
    const [product, created] = await Product.findOrCreate({
      name,
      description,
      mainImg,
      salePrice,
      purchasePrice,
      stock,
      discount,
    });
    if (created) {
      product.setImages(images);
      product.setSuppliers(supplier);
      product.setCategories(categories);
    } else {
      res.json({ msg: "Error, this product already exists" });
    }
  } catch (error) {
    next();
  }
});

products.get("/", async (req, res) => {
  res.json(jsonProducts);
});

module.exports = products;
