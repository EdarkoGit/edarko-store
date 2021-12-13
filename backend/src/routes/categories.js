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
        default: { name: categories[i] },
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

module.exports = categories;
