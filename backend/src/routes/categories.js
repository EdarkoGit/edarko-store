const { Router } = require("express");
const categories = Router();

const { Category } = require("../db");

categories.post("/", async (req, res, next) => {
  const { categories } = req.body;
  const notCreated = [];
  try {
    for (let i = 0; i < categories.length; i++) {
      const [category, created] = await Category.findOrCreate({
        where: { name: categories[i] },
        defaults: { name: categories[i] },
      });
      if (!created) {
        notCreated.push(categories[i]);
      }
    }
    res.json({
      msg: "Categories created successfully",
      notCreated: notCreated.length ? notCreated : "Faultlessly",
    });
  } catch (error) {
    next();
  }
});
categories.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ attributes: ["id", "name"] });
    if (!categories.length) return res.json({ msg: "Not found categories" });
    res.json(categories);
  } catch (error) {
    next();
  }
});

module.exports = categories;
