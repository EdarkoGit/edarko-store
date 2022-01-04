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
const cleanOneProduct = (product) => {
  const {
    id,
    name,
    description,
    salePrice,
    mainImg,
    rating,
    stock,
    discount,
    Images,
  } = product;
  return {
    id,
    name,
    description,
    salePrice,
    mainImg,
    rating,
    stock,
    discount,
    imgs: Images.map((item) => item.url),
  };
};

module.exports = { cleanProducts, cleanOneProduct };
