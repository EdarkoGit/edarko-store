import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";
import Search from "../../Search/Search";
import { Btn } from "../../common/btn/Btn";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/reducers/products/actions";
import Categories from "../../categories/Categories";

const Shop = () => {
  const dispatch = useDispatch();

  const onClickFull = () => {
    dispatch(getProducts());
  };
  return (
    <ShopStyle>
      <Search />
      <Btn onClick={onClickFull}>Full</Btn>
      <Categories />
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
