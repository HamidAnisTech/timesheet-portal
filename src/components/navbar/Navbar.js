import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom/";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import * as authACtion from "../../redux/actions/authAction";
function NavBar({ logout }) {
  const navigation = useNavigate();
  function onLogout(e) {
    e.preventDefault();
    logout();
    navigation("/login");
  }

  return (
    <nav class className="nav">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/home">WEBICARE LOGO</Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/timesheets">Timesheet</Link>
          </li>
          <li></li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/logout" onClick={onLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => {
  return {};
};

const mapDispatchToProp = {
  logout: authACtion.logout,
};
export default connect(mapStateToProp, mapDispatchToProp)(NavBar);
