import { axiosGet } from "../../../utils/axios";
import { actionGenerator } from "../../services/services";
import { SET_WHAT_RENDER_SHOP } from "../flags/const";
import { SET_PRODUCTS } from "./const";

export const getProducts = (page = 0, name) => {
  return async (dispatch) => {
    try {
      dispatch(actionGenerator(SET_WHAT_RENDER_SHOP, name ? "name" : "all"));
      const paged = await axiosGet(
        name ? `/products?page=${page}&&name=${name}` : `/products?page=${page}`
      );
      dispatch(actionGenerator(SET_PRODUCTS, paged));
    } catch (error) {
      console.log(error);
    }
  };
};
