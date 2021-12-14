const { Router } = require("express");
const products = Router();
const jsonProducts = require("../mockup/products.json");
const { Product, Image } = require("../db");

products.post("/", async (req, res, next) => {
  const {
    id,
    name,
    description,
    purchasePrice,
    salePrice,
    mainImg,
    stock,
    discount,
    imgs,
    supplier,
    categories,
  } = req.body;
  try {
    const [product, created] = await Product.findOrCreate({
      where: { id },
      defaults: {
        id,
        name,
        description,
        purchasePrice,
        salePrice,
        mainImg,
        stock,
        discount,
      },
    });
    if (created) {
      const intancesImage = [];
      for (let i = 0; i < imgs.length; i++) {
        const [img, created] = await Image.findOrCreate({
          where: { url: imgs[i] },
          defaults: {
            url: imgs[i],
          },
        });
        intancesImage.push(img);
      }
      await product.setImages(intancesImage);
      //product.setSuppliers(supplier);
      //product.setCategories(categories);
      res.json({ msg: "Product created successfully" });
    } else {
      res.json({ msg: "Error, this product already exists" });
    }
  } catch (error) {
    next(error);
  }
});

products.get("/", async (req, res) => {
  res.json(jsonProducts);
});

module.exports = products;
