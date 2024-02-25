import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <nav className="navigation-container">
      <div className="nav-center">
        <span className="app-name">Cloud Monitor Dashboard</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
