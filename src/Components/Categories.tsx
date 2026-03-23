import { CategoriesProps } from "../types";

export default function Categories({ categories, status }: CategoriesProps) {
  return (
    <div className="filter-option-group">
      <p>Miscellaneous</p>
      <div className="options-container">
        {status == "error" ? (
          <h1>An Error Ocurred</h1>
        ) : (
          categories.map(({ strCategory }, i) => {
            return (
              <div key={i} className="label-input-container">
                <input
                  type="radio"
                  name="filter_option"
                  id={strCategory}
                  value={`c=${strCategory}`}
                />
                <label htmlFor={strCategory}>{strCategory}</label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
