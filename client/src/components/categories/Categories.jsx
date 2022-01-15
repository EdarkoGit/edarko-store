import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/categories/actions";
import { selectCategories } from "./services";
import { CategoriesStyle } from "./style";

const Categories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <CategoriesStyle>
      {allCategories && selectCategories(allCategories)}
    </CategoriesStyle>
  );
};

export default Categories;
