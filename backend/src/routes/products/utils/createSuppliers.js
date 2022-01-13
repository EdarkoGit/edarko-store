module.exports = {
  createSuppliers: async function (model, suppliers) {
    const intancesSupplier = [];
    for (let i = 0; i < suppliers.length; i++) {
      const [supplier, created] = await model.findOrCreate({
        where: { email: suppliers[i].email },
        defaults: {
          phone: suppliers[i].phone,
          name: suppliers[i].name,
        },
      });
      intancesSupplier.push(supplier);
    }
    return intancesSupplier;
  },
};
