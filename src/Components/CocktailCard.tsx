import { useNavigate } from "react-router-dom";
import { Cocktail } from "../pages/Root";

export default function CocktailCard({
  idDrink,
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strGlass,
}: Cocktail) {
  const navigate = useNavigate();

  return (
    <div
      className="cocktail-card"
      onClick={() => navigate(`/cocktails/${idDrink}`)}
    >
      <img src={strDrinkThumb} alt={strDrink} width={"100%"} height={"auto"} />
      <div className="cocktail-info-container">
        <h1>{strDrink}</h1>
        <h5>{strGlass}</h5>
        <p className="alcoholic">{strAlcoholic}</p>

        <button
          className="cocktail-details-btn"
          onClick={() => navigate(`/cocktails/${idDrink}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
}
