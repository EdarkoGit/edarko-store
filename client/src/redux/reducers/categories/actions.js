import { URL_BASE_BACKEND } from "../../../constants/urls";
import { axiosGet } from "../../../utils/axios";
import { actionGenerator } from "../../services/services";
import { SET_CATEGORIES } from "./const";

export const getCategories = () => {
  return async (dispatch) => {
    const categories = await axiosGet(`${URL_BASE_BACKEND}/categories`);
    dispatch(actionGenerator(SET_CATEGORIES, categories));
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
