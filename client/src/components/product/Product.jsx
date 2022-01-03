import React from "react";
import { useProducts } from "./hooks/useProducts";
import { card } from "./services";
import { ProductStyle } from "./style";

const Product = () => {
  const products = useProducts();
  return (
    <ProductStyle>
      {products ? card(products) : "No hay productos con ese name"}
    </ProductStyle>
  );
};

export default Product;
