import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Paged = () => {
  const dispatch = useDispatch();
  const { pageCount, page } = useSelector((state) => state.products.paged);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const handlePagedClick = ({ selected }) => {
    dispatch(getProducts(selected, nameProduct ? nameProduct : null));
  };
  return (
    <ReactPaginate
      previousLabel={<FaAngleDoubleLeft />}
      nextLabel={<FaAngleDoubleRight />}
      breakLabel="..."
      pageCount={pageCount ? pageCount : 0}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePagedClick}
      containerClassName="paged"
      pageClassName="paged-item paged-numbers"
      pageLinkClassName="page-item-link"
      previousClassName="paged-item"
      nextClassName="paged-item"
      breakClassName="paged-item"
      forcePage={parseInt(page)}
      activeClassName="pageActive"
    />
  );
};

export default Paged;
