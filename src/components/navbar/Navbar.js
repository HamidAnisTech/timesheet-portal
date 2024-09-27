import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom/";
function NavBar() {
  const activeStyle = { color: "#F15B2A" };
  function onLogout(e) {
    e.preventDefault();
  }

  return (
    <nav class className="nav">
      <div className="navbar-container">
        <div className="logo">
          <NavLink activeClassName={activeStyle} to="/home">
            WEBICARE LOGO
          </NavLink>
        </div>
        <ul className="nav-list">
          <li>
            <NavLink activeClassName={activeStyle} to="/timesheets">
              Timesheet
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink activeClassName={activeStyle} to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={activeStyle}
              to="/logout"
              onClick={onLogout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
