const customFindOrCreate = (data, model, where, defaults) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const [instance, created] = await model.findOrCreate({
      where,
      defaults,
    });
    result.push(instance);    
  }
  return result;
};
