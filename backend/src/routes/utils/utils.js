const validateExistsCategories = async (model, arr) => {
  let flagExists = true;
  for (let i = 0; i < arr.length; i++) {
    const result = await model.findByPk(arr[i]);
    if (result === null) return (flagExists = false);
  }
  return flagExists;
};

module.exports = { validateExistsCategories };
