const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const products = Router();

products.get("/", (req, res) => {
  res.json();
});

module.exports = products;
