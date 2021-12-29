const { Router } = require("express");
const products = Router();
const { Product, Image, Supplier, Category } = require("../db");
const { validateExistsCategories } = require("./utils/utils");
const { paramsfindAndCountAll, cleanRows } = require("./utils/products");

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
    if (!(await validateExistsCategories(Category, categories))) {
      return res.json({ msg: "One of the categories does not exist" });
    }
    const [product, created] = await Product.findOrCreate({
      where: { id },
      defaults: {
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
        });
        intancesImage.push(img);
      }
      for (let i = 0; i < suppliers.length; i++) {
        const [supplier, created] = await Supplier.findOrCreate({
          where: { email: suppliers[i].email },
          defaults: {
            phone: suppliers[i].phone,
            name: suppliers[i].name,
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
  const productsByPage = 2;
  const { page } = req.query || 0;
  const { category } = req.query;
  try {
    const { count, rows } = await Product.findAndCountAll(
      paramsfindAndCountAll(
        page,
        productsByPage,
        Category,
        "categories",
        category
      )
    );
    const products = cleanRows(rows);
    res.json({ page, count, products });
  } catch (error) {
    next(error);
  }
});

module.exports = products;
