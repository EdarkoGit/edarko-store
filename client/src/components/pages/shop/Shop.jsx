import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";
import Search from "../../Search/Search";
import Categories from "../../categories/Categories";
import Order from "../../order/Order";

const Shop = () => {
  return (
    <ShopStyle>
      <Search />
      <Categories />
      <Order />
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
