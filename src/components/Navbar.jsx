import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SkillSwap
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/exchange">
          Exchange
        </Link>

        <Link to="/chat">
          Chat
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;