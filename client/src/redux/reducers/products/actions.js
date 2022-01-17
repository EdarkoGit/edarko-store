import { axiosGet } from "../../../utils/axios";
import { actionGenerator } from "../../services/services";
import { SET_WHAT_RENDER_SHOP } from "../flags/const";
import { SET_PRODUCTS } from "./const";

export const getProducts = (page = 0, typeOrder) => {
  return async (dispatch) => {
    try {
      dispatch(actionGenerator(SET_WHAT_RENDER_SHOP, "all"));

      const paged = typeOrder
        ? await axiosGet(`/products?page=${page}&&typeOrder=${typeOrder}`)
        : await axiosGet(`/products?page=${page}`);
      dispatch(actionGenerator(SET_PRODUCTS, paged));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductsByName = (page = 0, name, typeOrder) => {
  return async (dispatch) => {
    try {
      dispatch(actionGenerator(SET_WHAT_RENDER_SHOP, "name"));
      const paged = typeOrder
        ? await axiosGet(
            `/products?page=${page}&&name=${name}&&typeOrder=${typeOrder}`
          )
        : await axiosGet(`/products?page=${page}&&name=${name}`);
      dispatch(actionGenerator(SET_PRODUCTS, paged));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductsByCategory = (page = 0, category, typeOrder) => {
  return async (dispatch) => {
    try {
      dispatch(actionGenerator(SET_WHAT_RENDER_SHOP, "category"));
      const paged = typeOrder
        ? await axiosGet(
            `/products?page=${page}&&category=${category}&&typeOrder=${typeOrder}`
          )
        : await axiosGet(`/products?page=${page}&&category=${category}`);
      dispatch(actionGenerator(SET_PRODUCTS, paged));
    } catch (error) {
      console.log(error);
    }
  };
};
