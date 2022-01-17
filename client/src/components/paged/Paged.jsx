import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import {
  getProducts,
  getProductsByCategory,
  getProductsByName,
} from "../../redux/reducers/products/actions";

const Paged = () => {
  const dispatch = useDispatch();
  const { pageCount, page } = useSelector((state) => state.products.paged);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const categoryProduct = useSelector((state) => state.forms.categoryProduct);
  const typeOrder = useSelector((state) => state.forms.typeOrder);
  const whatRenderShop = useSelector((state) => state.flags.whatRenderShop);
  const handlePagedClick = ({ selected }) => {
    if (whatRenderShop === "all") {
      dispatch(getProducts(selected, typeOrder));
    } else if (whatRenderShop === "name") {
      dispatch(getProductsByName(selected, nameProduct, typeOrder));
    } else if (whatRenderShop === "category") {
      dispatch(getProductsByCategory(selected, categoryProduct, typeOrder));
    }
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
      pageLinkClassName="page-item-link"
      previousClassName="paged-item"
      nextClassName="paged-item"
      breakClassName="paged-item"
      forcePage={page ? parseInt(page) : -1}
      activeClassName="pageActive"
    />
  );
};

export default Paged;
