import React from "react";
import { useDispatch } from "react-redux";
import { SET_FORMS_NAME_PRODUCTS } from "../../redux/reducers/forms/const";
import { getProducts } from "../../redux/reducers/products/actions";
import { actionGenerator } from "../../redux/services/services";
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
