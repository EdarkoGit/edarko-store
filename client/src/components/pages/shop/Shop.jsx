import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";
import Search from "../../Search/Search";
import Categories from "../../categories/Categories";

const Shop = () => {
  return (
    <ShopStyle>
      <Search />
      <Categories />
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
