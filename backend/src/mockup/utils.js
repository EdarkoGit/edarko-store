const { products } = require("./products.json");
const categories = require("./categories.json");
const axios = require("axios");
const URL_CATEGORIES = "http://localhost:3001/categories";
const URL_PRODUCTS = "http://localhost:3001/products";

const loadMockProducts = async () => {
  await axios.post(URL_CATEGORIES, categories); // llena con data en la tabla o model Category de nuestra D.B
  const arrPromises = products.map((element) => returnPromise(element));
  await Promise.all(arrPromises); // llena la tabla product y sus tablas relacionadas, basicamente creamos cada producto con todas las de la ley
};

const returnPromise = (element) => {
  return axios.post(URL_PRODUCTS, element);
};

module.exports = loadMockProducts;
