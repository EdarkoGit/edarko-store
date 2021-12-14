const { products } = require("./products.json");
const { categories } = require("./categories.json");
const { suppliers } = require("./supplier.json");
const { Product, Category, Supplier } = require("../db");

const loadMockProducts = async () => {
  const products = await Product.bulkCreate(products);  
  await Supplier.bulkCreate(suppliers);
  return {
    msg: "Mockup of Products loaded...",
  };
};

const loadMockCategories = async () => {
  await Category.bulkCreate(categories);
  return {
    msg: "Mockup of Categories loaded...",
  };
};

module.exports = loadMockProducts;
