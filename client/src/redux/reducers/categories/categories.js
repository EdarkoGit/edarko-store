import { SET_ALL_CATEGORIES } from "./const";

const initialState = {
  allCategories: [],
};

export const categories = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    default:
      return state;
  }
};
