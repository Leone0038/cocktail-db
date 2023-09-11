export default async function getCocktail(id: string) {
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