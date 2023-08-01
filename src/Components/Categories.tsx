import { CategoriesProps } from "../types";

export default function Categories({ categories, status }: CategoriesProps) {
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
