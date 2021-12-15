const { Router } = require("express");
const products = Router();
const jsonProducts = require("../mockup/products.json");
const { Product, Image, Supplier } = require("../db");

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
    suppliers,
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
      const intancesSupplier = [];
      for (let i = 0; i < imgs.length; i++) {
        const [img, created] = await Image.findOrCreate({
          where: { url: imgs[i] },
          defaults: {
            url: imgs[i],
          },
        });
        intancesImage.push(img);
      }
      for (let i = 0; i < suppliers.length; i++) {
        const [supplier, created] = await Supplier.findOrCreate({
          where: { email: suppliers[i].email },
          defaults: {
            phone: suppliers[i].phone,
            name: suppliers[i].name,
            email: suppliers[i].email,
          },
        });
        intancesSupplier.push(supplier);
      }
      await product.setImages(intancesImage);
      await product.setSuppliers(intancesSupplier);
      await product.setCategories(categories);
      res.json({ msg: "Product created successfully" });
    } else {
      res.json({ msg: "Error, this product already exists" });
    }
  } catch (error) {
    next(error);
  }
});

products.get("/", async (req, res, next) => {
  const PRODUCTS_PER_PAGE = 10;
  try {
    const page = req.query.page || 1;
    const condition = {
      offset: (page - 1) * PRODUCTS_PER_PAGE,
      limit: PRODUCTS_PER_PAGE,
    };
    const { count, rows } = await Product.findAndCountAll(condition);
    const response = {
      page,
      totalEntries: count,
      entriesPerPage: PRODUCTS_PER_PAGE,
      products: rows,
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = products;
