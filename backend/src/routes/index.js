const { Router } = require("express");
const categories = require("./categories");
const products = require("./products");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/categories", categories);

module.exports = router;
