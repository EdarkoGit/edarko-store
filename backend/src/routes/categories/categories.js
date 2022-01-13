const { Router } = require("express");
const categories = Router();

const { Category } = require("../../db");

categories.post("/", async (req, res, next) => {
  const { categories } = req.body;
  try {
    for (let i = 0; i < categories.length; i++) {
      await Category.findOrCreate({
        where: { name: categories[i] },
      });
    }
    res.json({
      msg: "Categories created successfully",
    });
  } catch (error) {
    next();
  }
});
categories.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (!categories.length) return res.json({ msg: "Not found categories" });
    res.json(categories);
  } catch (error) {
    next();
  }
});

module.exports = categories;
