import './NavBar.css';
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  return (
    <div className="NavBar">
      <ul className="nav nav-bar">
        <h2>Employee Directory</h2>
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search Directory
        </Link>
        </li>
      </ul>
    </div>
  )
}
