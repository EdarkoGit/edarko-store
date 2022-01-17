import {
  SET_FORMS_CATEGORY_PRODUCTS,
  SET_FORMS_NAME_PRODUCTS,
  SET_FORMS_TYPEORDER_PRODUCTS,
} from "./const";

const initialState = {
  nameProduct: "",
  categoryProduct: "",
  typeOrder: "",
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
    case SET_FORMS_TYPEORDER_PRODUCTS:
      return {
        ...state,
        typeOrder: payload,
      };
    default:
      return state;
  }
};
