import React from "react";
import { ShopStyle } from "./style";
import Paged from "../../paged/Paged";
import Product from "../../product/Product";
import Search from "../../Search/Search";
import { Btn } from "../../common/btn/Btn";
import { getProducts } from "../../../redux/actions/products";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  const onClickFull = () => {
    dispatch(getProducts());
  };
  return (
    <ShopStyle>
      <Search />
      <Btn onClick={onClickFull}>Full</Btn>
      <Product />
      <Paged />
    </ShopStyle>
  );
};

export default Shop;
