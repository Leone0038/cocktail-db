import { LoaderFunctionArgs } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
async function getFilteredDrinks(filterOption: string) {
  try {
    const resp = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterOption}`
    );
    if (resp.ok) {
      const respToJson = await resp.json();

      return respToJson["drinks"];
    }
  } catch (err) {
    console.log(err);
  }
}

export default async function filterLoader({ params }: LoaderFunctionArgs) {
  const drinks = await getFilteredDrinks(params.filterOption as string);
  return drinks;
}
