import { CocktailsContainerProps } from "../types";
import CocktailCard from "./CocktailCard";

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
