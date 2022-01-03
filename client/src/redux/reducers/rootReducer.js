import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";

export const rootReducer = combineReducers({ products, forms });
