/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useContext } from "react";
import { Form } from "react-router-dom";
import { AppContext, AppContextProps } from "../pages/Root";

const categories_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const alcoholic_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";

const glasses_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";

const ingredients_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

export default function FilterInterface(props: {
  closeFilterInterface: () => void;
}) {
  const [categories, setCategories] = useState([
    {
      strCategory: "",
    },
  ]);
  const [alcoholic, setAlcoholic] = useState([
    {
      strAlcoholic: "",
    },
  ]);
  const [glasses, setGlasses] = useState([
    {
      strGlass: "",
    },
  ]);
  const [ingredients, setIngredients] = useState([
    {
      strIngredient1: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { changeUrl } = useContext(AppContext) as AppContextProps;
  const { closeFilterInterface } = props;

  useEffect(() => {
    async function getCategories() {
      try {
        setIsLoading(true);
        const resp = await fetch(categories_url);
        if (resp.ok) {
          const respToJson = await resp.json();
          setCategories(respToJson["drinks"]);
        }
      } catch (er) {
        console.log(er);
      }
      setIsLoading(false);
    }
    async function getAlcoholic() {
      try {
        setIsLoading(true);
        const resp = await fetch(alcoholic_url);
        if (resp.ok) {
          const respToJson = await resp.json();
          setAlcoholic(respToJson["drinks"]);
        }
      } catch (er) {
        console.log(er);
      }
      setIsLoading(false);
    }
    async function getGlasses() {
      try {
        setIsLoading(true);
        const resp = await fetch(glasses_url);
        if (resp.ok) {
          const respToJson = await resp.json();
          setGlasses(respToJson["drinks"]);
        }
      } catch (er) {
        console.log(er);
      }
      setIsLoading(false);
    }
    async function getIngredients() {
      try {
        setIsLoading(true);
        const resp = await fetch(ingredients_url);
        if (resp.ok) {
          const respToJson = await resp.json();
          setIngredients(respToJson["drinks"]);
        }
      } catch (er) {
        console.log(er);
      }
      setIsLoading(false);
    }
    getCategories();
    getAlcoholic();
    getGlasses();
    getIngredients();
  }, []);

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
      <div className="filter-option-group">
        <p>Category</p>
        <div className="options-container">
          {isLoading ? (
            <img
              src="/icons/loading.svg"
              alt="Loading..."
              className="filter-loading"
            />
          ) : (
            filteredCategories.map(({ strCategory }, i) => {
              return (
                <div key={i} className="label-input-container">
                  <input
                    type="radio"
                    name="filter_option"
                    id={strCategory}
                    value={`c=${strCategory}`}
                  />
                  <label htmlFor={strCategory}>{strCategory}</label>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="filter-option-group">
        <p>Alcoholic</p>
        <div className="options-container">
          {isLoading ? (
            <img
              src="/icons/loading.svg"
              alt="Loading..."
              className="filter-loading"
            />
          ) : (
            filteredAlcoholic.map(({ strAlcoholic }, i) => {
              return (
                <div key={i} className="label-input-container">
                  <input
                    type="radio"
                    name="filter_option"
                    id={strAlcoholic}
                    value={`a=${strAlcoholic}`}
                  />
                  <label htmlFor={strAlcoholic}>{strAlcoholic}</label>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="filter-option-group">
        <p>Glass</p>
        <div className="options-container">
          {isLoading ? (
            <img
              src="/icons/loading.svg"
              alt="Loading..."
              className="filter-loading"
            />
          ) : (
            filteredGlasses.map(({ strGlass }, i) => {
              return (
                <div key={i} className="label-input-container">
                  <input
                    type="radio"
                    name="filter_option"
                    id={strGlass}
                    value={`g=${strGlass}`}
                  />
                  <label htmlFor={strGlass}>{strGlass}</label>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="filter-option-group">
        <p>Ingredient</p>
        <div className="options-container">
          {isLoading ? (
            <img
              src="/icons/loading.svg"
              alt="Loading..."
              className="filter-loading"
            />
          ) : (
            filteredIngredients.map(({ strIngredient1 }, i) => {
              return (
                <div key={i} className="label-input-container">
                  <input
                    type="radio"
                    name="filter_option"
                    id={strIngredient1}
                    value={`i=${strIngredient1}`}
                  />
                  <label htmlFor={strIngredient1}>{strIngredient1}</label>
                </div>
              );
            })
          )}
        </div>
      </div>
      <button className="filter-submit-btn" type="submit">
        Filter
      </button>
    </Form>
  );
}
