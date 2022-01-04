import { URL_BASE_BACKEND } from "../../constants/urls";
import { SET_WHAT_RENDER_SHOP } from "../constants/flags";
import { SET_PRODUCTS } from "../constants/products";
import { actionGenerator, axiosGet } from "./services";

export const getProducts = (page = 0, name) => {
  return async (dispatch) => {
    try {
      dispatch(actionGenerator(SET_WHAT_RENDER_SHOP, name ? "name" : "all"));
      const paged = await axiosGet(
        name
          ? `${URL_BASE_BACKEND}/products?page=${page}&&name=${name}`
          : `${URL_BASE_BACKEND}/products?page=${page}`
      );
      dispatch(actionGenerator(SET_PRODUCTS, paged));
    } catch (error) {
      console.log(error);
    }
  };
};
