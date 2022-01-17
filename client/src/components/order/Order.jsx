import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_FORMS_TYPEORDER_PRODUCTS } from "../../redux/reducers/forms/const";
import {
  getProducts,
  getProductsByCategory,
  getProductsByName,
} from "../../redux/reducers/products/actions";
import { actionGenerator } from "../../redux/services/services";
import { OrderStyle } from "./style";

const Order = () => {
  const dispatch = useDispatch();
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const categoryProduct = useSelector((state) => state.forms.categoryProduct);
  const whatRenderShop = useSelector((state) => state.flags.whatRenderShop);

  const handleOnChangeOrder = (e) => {
    const typeOrder = e.target.value;
    dispatch(actionGenerator(SET_FORMS_TYPEORDER_PRODUCTS, typeOrder));
    if (whatRenderShop === "all") {
      dispatch(getProducts(0, typeOrder));
    } else if (whatRenderShop === "name") {
      dispatch(getProductsByName(0, nameProduct, typeOrder));
    } else if (whatRenderShop === "category") {
      dispatch(getProductsByCategory(0, categoryProduct, typeOrder));
    }
  };

  return (
    <OrderStyle>
      <select name="" id="" onChange={handleOnChangeOrder}>
        <option>default</option>
        <option value="asc">economico</option>
        <option value="desc">costoso</option>
      </select>
    </OrderStyle>
  );
};

export default Order;
