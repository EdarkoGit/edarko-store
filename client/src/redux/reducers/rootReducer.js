import { combineReducers } from "redux";
import { forms } from "./forms/forms";
import { flags } from "./flags/flags";
import { products } from "./products/products";
import { categories } from "./categories/categories";

export const rootReducer = combineReducers({
  products,
  forms,
  flags,
  categories,
});
