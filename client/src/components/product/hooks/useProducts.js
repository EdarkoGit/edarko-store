import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/products";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.paged.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return products;
};
