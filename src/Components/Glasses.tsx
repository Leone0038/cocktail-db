import { GlassesProps } from "../types";

export default function Glasses({ glasses, status }: GlassesProps) {
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
        ) : status == "error" ? (
          <h1>An Error Ocurred</h1>
        ) : (
          glasses.map(({ strGlass }, i) => {
            return (
              <div key={i} className="label-input-container">
                <input
                  type="radio"
                  name="filter_option"
                  id={strGlass}
                  value={`c=${strGlass}`}
                />
                <label htmlFor={strGlass}>{strGlass}</label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
