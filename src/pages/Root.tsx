import "../css/style.css";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import CocktailsContainer from "../Components/CocktailsContainer";
import { createContext, useState } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { AppContextProps, Cocktail } from "../types";

export const AppContext = createContext({} as AppContextProps);

export default function Root() {
  const cocktailsList = useLoaderData() as Cocktail[];
  const [searchResults, setSearchResults] = useState<Cocktail[]>([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const navigation = useNavigation();
  const navigate = useNavigate();

  async function searchCocktail(text: string) {
    try {
      setIsLoadingSearch(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      if (response.ok) {
        const responseToJson = await response.json();
        setSearchResults(responseToJson["drinks"]);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoadingSearch(false);
  }

  function changeUrl(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    navigate(`/filter/${formData.get("filter_option")}`);
  }

  return (
    <AppContext.Provider
      value={{
        searchCocktail,
        changeUrl,
      }}
    >
      <div className="app">
        {navigation.state == "loading" ? (
          <img
            src="/icons/loading.svg"
            alt="Loading..."
            className="app-loading"
          />
        ) : (
          <>
            <Header />
            <SearchBar />
            {isLoadingSearch ? (
              <img
                src="/icons/loading.svg"
                alt="Loading..."
                style={{ alignSelf: "center" }}
              />
            ) : searchResults == null ? (
              <h1 style={{ alignSelf: "center" }}>No Search Matches</h1>
            ) : searchResults.length < 1 ? (
              <>
                <h1 style={{ textAlign: "center" }}>Cocktails</h1>
                <CocktailsContainer cocktailsList={cocktailsList} />
              </>
            ) : (
              <>
                <h1 style={{ textAlign: "center" }}>Cocktails</h1>
                <CocktailsContainer cocktailsList={searchResults} />
              </>
            )}{" "}
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}
