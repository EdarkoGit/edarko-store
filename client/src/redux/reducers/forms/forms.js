import { SET_FORMS_CATEGORY_PRODUCTS, SET_FORMS_NAME_PRODUCTS } from "./const";

const initialState = {
  nameProduct: "",
  categoryProduct: "",
};

export const forms = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FORMS_NAME_PRODUCTS:
      return {
        ...state,
        nameProduct: payload,
      };
    case SET_FORMS_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProduct: payload,
      };
    default:
      return state;
  }
};
