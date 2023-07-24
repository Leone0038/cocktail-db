import { LoaderFunctionArgs } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
async function getCocktail(id: string) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (response.ok) {
      const responseToJson = await response.json();
      return responseToJson["drinks"][0];
    }
  } catch (err) {
    console.log(err);
  }
}

export async function cocktailLoader({ params }: LoaderFunctionArgs) {
  const cocktail = await getCocktail(params.cocktailId as string);
  return cocktail;
}
