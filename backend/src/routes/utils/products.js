const paramsfindAndCountAll = (page, limit, model, as, id) => {
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
const cleanProducts = (rows) => {
  return rows.map((item) => {
    const { id, name, salePrice, mainImg, rating } = item;
    return {
      id,
      name,
      salePrice,
      mainImg,
      rating,
    };
  });
};

module.exports = { paramsfindAndCountAll, cleanProducts };
