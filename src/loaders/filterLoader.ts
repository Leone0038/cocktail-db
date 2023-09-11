import { LoaderFunctionArgs } from "react-router-dom";
import getFilteredDrinks from "../utils/getFilteredDrinks";

export default async function filterLoader({ params }: LoaderFunctionArgs) {
  const drinks = await getFilteredDrinks(params.filterOption as string);
  return drinks;
}
