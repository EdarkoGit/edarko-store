import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";

const Paged = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.products.paged.count);
  const productsByPage = useSelector(
    (state) => state.products.paged.productsByPage
  );
  const handlePagedClick = ({ selected }) => {
    dispatch(getProducts(selected));
  };
  return (
    <ReactPaginate
      previousLabel="anterior"
      nextLabel="siguiente"
      breakLabel="..."
      pageCount={count ? Math.ceil(count / productsByPage) : null}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePagedClick}
      containerClassName="paged"
      pageClassName="paged-item"
      pageLinkClassName="page-item-link"
      previousClassName="paged-item"
      nextClassName="paged-item"
      breakClassName="paged-item"
    />
  );
};

export default Paged;
