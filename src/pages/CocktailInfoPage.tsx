import { useNavigate, useLoaderData, useNavigation } from "react-router-dom";
import { Cocktail } from "../types";
import RelatedDrinks from "../Components/RelatedDrinks";


export default function CocktailInfoPage() {
  const {
    cocktail: {
      strAlcoholic,
      strCategory,
      strDrink,
      strDrinkThumb,
      strGlass,
      strIngredient1,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strInstructions,
    },
    relatedDrinks,
  } = useLoaderData() as { cocktail: Cocktail; relatedDrinks: Cocktail[] };

  const navigation = useNavigation();

  const filteredIngredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  ].filter((i) => i != null);

  const navigate = useNavigate();
  if (navigation.state == 'idle') {
    scroll({top: 0})
  }
  return (
    <div className="cocktail-info-container">
      {navigation.state == "loading" ? (
        <img
          src="/icons/loading.svg"
          alt="Loading..."
          className="cocktail-loading"
        />
      ) : (
        <div className="cocktail-info">
          <button className="back-to-home-btn" onClick={() => {
            navigate(-1)
            
          }}>
            Go back
          </button>

          <div className="img-and-info-container">
            <img src={strDrinkThumb} alt={strDrink} />
            <div className="info-container">
              <p>
                <span className="green-container">Name</span> : {"  "}
                {strDrink}
              </p>
              <p>
                <span className="green-container">Category</span> : {"  "}
                {strCategory}
              </p>
              <p>
                <span className="green-container">Info</span> : {"  "}
                {strAlcoholic}
              </p>
              <p>
                <span className="green-container">Glass</span> : {"  "}
                {strGlass}
              </p>
              <p>
                <span className="green-container">Ingredients</span> :{" "}
                {filteredIngredients.map((ingredient) => {
                  return filteredIngredients.indexOf(ingredient) !=
                    filteredIngredients.length - 1
                    ? (ingredient += ", ")
                    : (ingredient += ".");
                })}
              </p>
              <p>
                <span className="green-container">Instructions</span> : {"  "}
                {strInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
      <h1>Related Drinks</h1>
      <RelatedDrinks relatedDrinks={relatedDrinks} />
    </div>
  );
}
