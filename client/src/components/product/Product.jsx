import React from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductStyle } from "./style";

const Product = () => {
  const products = useProducts();
  return (
    <ProductStyle>
      {products
        ? products.map((item) => <div key={item.id}>{item.name}</div>)
        : null}
    </ProductStyle>
  );
};

export default Product;
