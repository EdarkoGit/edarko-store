import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsByCategory,
  getProductsByName,
} from "../../../redux/reducers/products/actions";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.paged.products);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const categoryProduct = useSelector((state) => state.forms.categoryProduct);
  const whatRenderShop = useSelector((state) => state.flags.whatRenderShop);

  useEffect(() => {
    const whatRender = {
      name: function () {
        dispatch(getProductsByName(0, nameProduct));
      },
      category: function () {
        dispatch(getProductsByCategory(0, categoryProduct));
      },
      all: function () {
        dispatch(getProducts());
      },
    };
    whatRender[whatRenderShop]();
  }, [nameProduct, categoryProduct, whatRenderShop, dispatch]);
  return products;
};
