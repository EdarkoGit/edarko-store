import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/reducers/products/actions";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.paged.products);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const whatRenderShop = useSelector((state) => state.flags.whatRenderShop);

  useEffect(() => {
    const whatRender = {
      name: function () {
        dispatch(getProducts(0, nameProduct));
      },
      all: function () {
        dispatch(getProducts());
      },
    };
    whatRender[whatRenderShop]();
  }, [nameProduct, whatRenderShop, dispatch]);
  return products;
};
