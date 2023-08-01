import { AlcoholicProps } from "../types";

export default function Alcoholic({ alcoholic, status }: AlcoholicProps) {
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
          alcoholic.map(({ strAlcoholic }, i) => {
            return (
              <div key={i} className="label-input-container">
                <input
                  type="radio"
                  name="filter_option"
                  id={strAlcoholic}
                  value={`c=${strAlcoholic}`}
                />
                <label htmlFor={strAlcoholic}>{strAlcoholic}</label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
