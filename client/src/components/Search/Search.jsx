import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { actionGenerator } from "../../redux/actions/services";
import { SET_FORMS_NAME_PRODUCTS } from "../../redux/constants/forms";
import { useNameProduct } from "./hooks/useNameProduct";
import Viewport from "./Viewport";

const Search = () => {
  const dispatch = useDispatch();
  const { name, setName, handleNameChange } = useNameProduct();
  const searchProducts = (e) => {
    e.preventDefault();
    if (name !== "") {
      dispatch(actionGenerator(SET_FORMS_NAME_PRODUCTS, name));
      dispatch(getProducts(0, name));
      setName("");
    }
  };

  return (
    <Viewport
      onChange={handleNameChange}
      value={name}
      onSubmit={searchProducts}
    />
  );
};

export default Search;
