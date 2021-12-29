const paramsfindAndCountAll = (page, limit, model, as, id) => {
  console.log(page * limit);
  return {
    attributes: ["id", "name", "salePrice", "mainImg", "rating"],
    offset: page * limit,
    limit,
    include: [
      {
        model,
        as,
        where: id ? { id } : {},
      },
    ],
    distinct: true,
  };
};
const cleanRows = (rows) => {
  return rows.map((item) => {
    const { id, name, salePrice, mainImg, rating, categories } = item;
    const cleanCategories = categories.map((element) => ({
      id: element.id,
      name: element.name,
    }));
    return {
      id,
      name,
      salePrice,
      mainImg,
      rating,
      categories: cleanCategories,
    };
  });
};

module.exports = { paramsfindAndCountAll, cleanRows };
