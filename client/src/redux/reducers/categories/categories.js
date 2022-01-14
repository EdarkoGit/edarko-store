import { SET_CATEGORIES } from "./const";

const initialState = {
  categories: [],
};

export const categories = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
