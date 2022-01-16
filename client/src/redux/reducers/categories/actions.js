import { axiosGet } from "../../../utils/axios";
import { actionGenerator } from "../../services/services";
import { SET_ALL_CATEGORIES } from "./const";

export const getCategories = () => {
  return async (dispatch) => {
    const categories = await axiosGet(`/categories`);
    dispatch(actionGenerator(SET_ALL_CATEGORIES, categories));
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
