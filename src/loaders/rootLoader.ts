import getCocktails from "../utils/getCocktails";

export default async function rootLoader() {
  const cocktails = await getCocktails();
  return cocktails;
}
