const { Router } = require("express");
const products = Router();
const { Product, Image, Supplier, Category, Op } = require("../db");
const { validateExistsCategories } = require("./utils/utils");
const { cleanProducts, cleanOneProduct } = require("./utils/products");
const { productsByPage } = require("../constants");

products.post("/", async (req, res, next) => {
  const {
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
      where: { name },
      defaults: {
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
  const page = req.query.page || 0;
  const { category, name, typeOrder } = req.query;

  const hashOrder = {
    desc: [["salePrice", "DESC"]],
    asc: [["salePrice", "ASC"]],
  };

  const basicProps = {
    attributes: ["id", "name", "salePrice", "mainImg", "rating"],
    offset: page * productsByPage,
    limit: productsByPage,
    order: hashOrder[typeOrder] || [],
  };

  try {
    if (name) {
      const { count, rows } = await Product.findAndCountAll({
        ...basicProps,
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      const products = cleanProducts(rows);
      const data = {
        page,
        count,
        productsByPage,
        pageCount: Math.ceil(count / productsByPage),
        products,
      };
      res.json(products.length ? data : { msg: "Not found products" });
    } else {
      const { count, rows } = await Product.findAndCountAll({
        ...basicProps,
        include: [
          {
            model: Category,
            as: "categories",
            where: category || {},
          },
        ],
        distinct: true,
      });
      const products = cleanProducts(rows);
      const data = {
        page,
        count,
        productsByPage,
        pageCount: Math.ceil(count / productsByPage),
        products,
      };
      res.json(products.length ? data : { msg: "Not found products" });
    }
  } catch (error) {
    next(error);
  }
});
products.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const intanceProduct = await Product.findOne({
      where: { id },
      include: [{ model: Image }],
    });
    const product = cleanOneProduct(intanceProduct);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = products;
