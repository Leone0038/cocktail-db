export default async function getCocktails() {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b"
    );
    if (response.ok) {
      const response_to_json = await response.json();
      return response_to_json["drinks"];
    }
  } catch (err) {
    console.log(err);
  }
}
