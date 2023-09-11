import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h2>
        The
        <span style={{ color: "darkgreen", fontWeight: "bold" }}>Cocktail</span>
        DB
      </h2>
      <div className="links-container">
        <a onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>Home</a>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}
