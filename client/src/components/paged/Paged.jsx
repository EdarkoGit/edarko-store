import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { handlePagedClick } from "./handlePagedClick";

const Paged = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.products.paged.count);
  return (
    <ReactPaginate
      previousLabel="anterior"
      nextLabel="siguiente"
      breakLabel="..."
      pageCount={count}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={({ selected }) => handlePagedClick(selected, dispatch)}
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
