/* const customFindOrCreate = (data, model, where, defaults) => {
  const instances = [];
  for (let i = 0; i < data.length; i++) {
    const [instance, created] = await model.findOrCreate({
      where,
      defaults,
    });
    result.push(instance);
  }
  return instances;
}; */

const validateExistsCategories = async (model, arr) => {
  let flagExists = true;
  for (let i = 0; i < arr.length; i++) {
    const result = await model.findByPk(arr[i]);
    if (result === null) return (flagExists = false);
  }
  return flagExists;
};

module.exports = { validateExistsCategories };
