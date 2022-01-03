import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { flags } from "./flags";

export const rootReducer = combineReducers({ products, forms, flags });
