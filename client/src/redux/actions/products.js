import { URL_BASE_BACKEND } from "../../constants/urls";
import { SET_PRODUCTS } from "../constants/products";
import { actionGenerator, axiosGet } from "./services";

export const getProducts = (page = 0) => {
  return async (dispatch) => {
    const products = await axiosGet(
      `${URL_BASE_BACKEND}/products?page=${page}`
    );
    dispatch(actionGenerator(SET_PRODUCTS, products));
  };
};
