import { useNavigate } from "react-router-dom";
import { RelatedDrinksProps } from "../types";

export default function RelatedDrinks({ relatedDrinks }: RelatedDrinksProps) {
  const navigate = useNavigate()
  const renderedDrinks = relatedDrinks.map(({ strDrinkThumb, strDrink, idDrink }, i) => (
    <div key={i} className="related-drink" onClick={()=>{
      
      navigate(`/cocktails/${idDrink}`)
      
    } }>
      <img src={strDrinkThumb} alt={strDrink} />
      <p>{strDrink}</p>
    </div>
  ));
  return <section className="related-drinks">{renderedDrinks}</section>;
}
