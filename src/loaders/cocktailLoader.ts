import { LoaderFunctionArgs } from "react-router-dom";
import getCocktail from "../utils/getCocktail";
import getFilteredDrinks from "../utils/getFilteredDrinks";

export async function cocktailLoader({ params }: LoaderFunctionArgs) {
  const cocktail = await getCocktail(params.cocktailId as string);
  const relatedDrinks = await getFilteredDrinks(`c=${cocktail.strCategory}`);
  return {cocktail, relatedDrinks};
}
