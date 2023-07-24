import { useContext, useState } from "react";
import { AppContext, AppContextProps } from "../pages/Root";
import FilterInterface from "./FilterInterface";

export default function SearchBar() {
  const { searchCocktail } = useContext(AppContext) as AppContextProps;
  const [toggleFilterInterface, setToggleFilterInterface] = useState(false);
  const [search, setSearch] = useState("");

  function showFilterInterface() {
    setToggleFilterInterface(true);
  }
  function closeFilterInterface() {
    setToggleFilterInterface(false);
  }

  return (
    <>
      <div className="search-bar">
        <div className="label-and-filter-container">
          <label htmlFor="search_input">search your favorite cocktail</label>
          <button className="filter-btn" onClick={showFilterInterface}>
            <img src="/icons/filter.png" alt="Filter" />
          </button>
        </div>

        <div className="input-container">
          <input
            type="search"
            name="search_input"
            id="search_input"
            onChange={(e) => {
              searchCocktail(e.target.value);
              setSearch(e.target.value);
            }}
            required
            autoComplete="off"
            value={search}
          />
        </div>
      </div>
      {toggleFilterInterface && (
        <FilterInterface closeFilterInterface={closeFilterInterface} />
      )}
    </>
  );
}
