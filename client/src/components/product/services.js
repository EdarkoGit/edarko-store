import Card from "../card/Card";

export const card = (products) => {
  return products.map((item) => {
    const { id, name, mainImg, salePrice } = item;
    return (
      <Card
        className={"product"}
        key={id}
        id={id}
        name={name}
        mainImg={mainImg}
        salePrice={salePrice}
      />
    );
  });
};
