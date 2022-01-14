import { SET_FORMS_NAME_PRODUCTS } from "./const";

const initialState = {
  nameProduct: "",
};

export const forms = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FORMS_NAME_PRODUCTS:
      return {
        ...state,
        nameProduct: payload,
      };
    default:
      return state;
  }
};
