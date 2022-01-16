import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/categories/actions";
import { SET_FORMS_CATEGORY_PRODUCTS } from "../../redux/reducers/forms/const";
import {
  getProducts,
  getProductsByCategory,
} from "../../redux/reducers/products/actions";
import { actionGenerator } from "../../redux/services/services";
import { selectCategories } from "./services";
import { CategoriesStyle } from "./style";

const Categories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const handleOnChangeCategory = (e) => {
    const category = e.target.value;
    dispatch(actionGenerator(SET_FORMS_CATEGORY_PRODUCTS, category));
    if (category === "full") return dispatch(getProducts());
    dispatch(getProductsByCategory(0, category));
  };
  return (
    <CategoriesStyle>
      {allCategories && selectCategories(allCategories, handleOnChangeCategory)}
    </CategoriesStyle>
  );
};

export default Categories;
