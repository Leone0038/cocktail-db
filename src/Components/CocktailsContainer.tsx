import { Cocktail } from "../pages/Root";
import CocktailCard from "./CocktailCard";

type CocktailsContainerProps = {
  cocktailsList: Cocktail[];
};

export default function CocktailsContainer({
  cocktailsList,
}: CocktailsContainerProps) {
  return (
    <div className="cocktails-container">
      {cocktailsList.map((cocktail) => {
        return <CocktailCard {...cocktail} key={cocktail.idDrink} />;
      })}
    </div>
  );
}
