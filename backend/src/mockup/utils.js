const categories = require("./categories.json");
const { products } = require("./products.json");
const axios = require("axios");
const URL_CATEGORIES = "http://localhost:3001/categories";
const URL_PRODUCTS = "http://localhost:3001/products";

const loadMockCategories = async () => {
  const result = await axios.post(URL_CATEGORIES, categories);
};
const loadMockProducts = async () => {
  try {
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      await axios.post(URL_PRODUCTS, element);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadMockCategories, loadMockProducts };
