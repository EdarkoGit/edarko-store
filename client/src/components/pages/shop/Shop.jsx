import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";

const Shop = () => {
  return (
    <ShopStyle>
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
