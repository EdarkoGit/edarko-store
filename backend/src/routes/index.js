const { Router } = require("express");
const categories = require("./categories");
const products = require("./products");
const suppliers = require("./suppliers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/categories", categories);
router.use("/suppliers", suppliers);

module.exports = router;
