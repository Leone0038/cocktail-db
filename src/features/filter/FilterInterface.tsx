/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Form } from "react-router-dom";
import { AppContext } from "../../pages/Root";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAlcoholic,
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
  getStatus,
  selectAllAlcoholic,
  selectAllCategories,
  selectAllGlasses,
  selectAllIngredients,
} from "./filterSlice";
import { FilterInterfaceProps } from "../../types";

import Categories from "../../components/Categories";
import Alcoholic from "../../components/Alcoholic";
import Glasses from "../../components/Glasses";
import Ingredients from "../../components/Ingredients";

import { AnyAction } from "@reduxjs/toolkit";

export default function FilterInterface({
  closeFilterInterface,
}: FilterInterfaceProps) {
  const status = useSelector(getStatus);
  const categories = useSelector(selectAllCategories);
  const alcoholic = useSelector(selectAllAlcoholic);
  const glasses = useSelector(selectAllGlasses);
  const ingredients = useSelector(selectAllIngredients);

  const { changeUrl } = useContext(AppContext);

  const filteredCategories = categories.filter(
    (c) => !c.strCategory.includes("/")
  );
  const filteredAlcoholic = alcoholic.filter(
    (c) => !c.strAlcoholic.includes("/")
  );
  const filteredGlasses = glasses.filter((c) => !c.strGlass.includes("/"));
  const filteredIngredients = ingredients.filter(
    (c) => !c.strIngredient1.includes("/")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlcoholic() as unknown as AnyAction);
    dispatch(fetchCategories() as unknown as AnyAction);
    dispatch(fetchGlasses() as unknown as AnyAction);
    dispatch(fetchIngredients() as unknown as AnyAction);
  }, []);

  return (
    <Form className="filter-interface" method="post" onSubmit={changeUrl}>
      <button className="close-btn" onClick={closeFilterInterface}>
        <img src="/icons/remove.png" alt="Close" />
      </button>
      <Categories categories={filteredCategories} status={status} />
      <Alcoholic alcoholic={filteredAlcoholic} status={status} />
      <Glasses glasses={filteredGlasses} status={status} />
      <Ingredients ingredients={filteredIngredients} status={status} />
      <button className="filter-submit-btn" type="submit">
        Filter
      </button>
    </Form>
  );
}
