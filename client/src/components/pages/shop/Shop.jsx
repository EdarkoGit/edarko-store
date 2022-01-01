import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";
import Search from "../../Search/Search";

const Shop = () => {
  return (
    <ShopStyle>
      <Search />
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
