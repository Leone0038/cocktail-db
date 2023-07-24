/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as Response;
  return (
    <div className="error-page-container">
      <div className="error-page">
        <h1>An Error Ocurred</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}
