export default async function getFilteredDrinks(filterOption: string) {
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