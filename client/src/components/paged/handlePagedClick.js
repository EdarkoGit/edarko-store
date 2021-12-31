import { getProducts } from "../../redux/actions/products";

export const handlePagedClick = (selected, dispatch) => {
  dispatch(getProducts(selected));
};
