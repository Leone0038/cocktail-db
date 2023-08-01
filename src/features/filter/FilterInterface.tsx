/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { Form } from "react-router-dom";
import { AppContext } from "../../pages/Root";

import {
  getStatus,
  selectAllAlcoholic,
  selectAllCategories,
  selectAllGlasses,
  selectAllIngredients,
} from "./filterSlice";
import { FilterInterfaceProps } from "../../types";

import Categories from "../../Components/Categories";
import Alcoholic from "../../Components/Alcoholic";
import Glasses from "../../Components/Glasses";
import Ingredients from "../../Components/Ingredients";
import { useSelector } from "react-redux";

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
