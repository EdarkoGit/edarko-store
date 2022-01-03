import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/products";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.paged.products);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  useEffect(() => {
    if (nameProduct !== "") {
      return dispatch(getProducts(0, nameProduct));
    }
    dispatch(getProducts());
  }, [nameProduct, dispatch]);
  return products;
};
