const { Router } = require("express");
const categories = Router();

const { Category } = require("../db");

categories.post("/", async (req, res, next) => {
  const { categories } = req.body;
  try {
    let arrBugs = [];
    categories.forEach(async (element) => {
      const [category, created] = await Category.findOrCreate({
        where: { name: element },
        default: { name: element },
      });
      if (!created) {
        console.log("no created");
        arrBugs.push(element);
      }
    });
    console.log("------>", arrBugs);
    res.json({
      msg: "Finished process",
      bugs: arrBugs.length > 0 ? arrBugs : "Faultlessly",
    });
  } catch (error) {
    next();
  }
});

module.exports = categories;
