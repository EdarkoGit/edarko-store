import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/reducers/categories/actions";
import { CategoriesStyle } from "./style";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return <CategoriesStyle>filter by categories</CategoriesStyle>;
};

export default Categories;
