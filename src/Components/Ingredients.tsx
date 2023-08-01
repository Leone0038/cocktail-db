import { IngredientsProps } from "../types";

export default function Ingredients({ ingredients, status }: IngredientsProps) {
  return (
    <div className="filter-option-group">
      <p>Category</p>
      <div className="options-container">
        {status == "loading" ? (
          <img
            src="/icons/loading.svg"
            alt="Loading..."
            className="filter-loading"
          />
        ) : (
          ingredients.map(({ strIngredient1 }, i) => {
            return (
              <div key={i} className="label-input-container">
                <input
                  type="radio"
                  name="filter_option"
                  id={strIngredient1}
                  value={`c=${strIngredient1}`}
                />
                <label htmlFor={strIngredient1}>{strIngredient1}</label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
