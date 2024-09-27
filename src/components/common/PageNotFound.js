import React from "react";
import {Link } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {

  return (
    <div className="container-page-error">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404 Page Not Found</i>
      </p>

      <Link to="home" className="btn btn-primary">
        Back To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
