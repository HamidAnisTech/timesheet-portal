import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <Link to="/" exact>
        Home
      </Link>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
