import { URL_BASE_BACKEND } from "../../constants/urls";
import { SET_PRODUCTS } from "../constants/products";
import { actionGenerator, axiosGet } from "./services";

export const getProducts = (page = 0, name) => {
  return async (dispatch) => {
    try {
      const products = await axiosGet(
        name
          ? `${URL_BASE_BACKEND}/products?page=${page}&&name=${name}`
          : `${URL_BASE_BACKEND}/products?page=${page}`
      );
      dispatch(actionGenerator(SET_PRODUCTS, products));
    } catch (error) {
      console.log(error);
    }
  };
};
