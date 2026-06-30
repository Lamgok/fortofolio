import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="logo">
          Portfolio<span>Hub</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
