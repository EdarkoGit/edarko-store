import { SET_WHAT_RENDER_SHOP } from "../constants/flags";

const initialState = {
  whatRenderShop: "all",
};

export const flags = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WHAT_RENDER_SHOP:
      return {
        ...state,
        whatRenderShop: payload,
      };
    default:
      return state;
  }
};
