import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/products";
import { ShopStyle } from "./style";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.paged.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handlePageClick = (data) => {
    dispatch(getProducts(data.selected));
  };
  return (
    <ShopStyle>
      <ReactPaginate
        previousLabel="anterior"
        nextLabel="siguiente"
        breakLabel="..."
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="paged"
        pageClassName="paged-item"
        pageLinkClassName="page-item-link"
        previousClassName="paged-item"
        nextClassName="paged-item"
        breakClassName="paged-item"
      />
      {products
        ? products.map((item) => <div key={item.id}>{item.name}</div>)
        : null}
    </ShopStyle>
  );
};

export default Shop;
