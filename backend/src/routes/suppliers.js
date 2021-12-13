const { Router } = require("express");
const suppliers = Router();

const { Supplier } = require("../db");

suppliers.post("/", async (req, res, next) => {
  const { suppliers } = req.body;
  const notCreated = [];
  try {
    for (let i = 0; i < suppliers.length; i++) {
      const { name, phone, email } = suppliers[i];
      const [supplier, created] = await Supplier.findOrCreate({
        where: { email },
        defaults: { name, phone, email },
      });
      if (!created) {
        notCreated.push(suppliers[i]);
      }
    }
    res.json({
      msg: "Created successfully",
      notCreated: notCreated.length ? notCreated : "Faultlessly",
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = suppliers;
