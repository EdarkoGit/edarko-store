import { SET_PRODUCTS } from "../constants/products";

const initialState = {
  product: "product",
  paged: {},
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        paged: payload,
      };
    default:
      return state;
  }
};
