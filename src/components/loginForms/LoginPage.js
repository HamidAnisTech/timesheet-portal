import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "./LoginPage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as authACtion from "../../redux/actions/authAction";
const LoginPage = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  let hundleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  let hundlePswdInput = (e) => {
    setPswd(e.target.value);
  };

  function formIsValid() {
    const errors = {};

    if (!email.includes("@")) errors.email = "Provide valid email.";
    if (!pswd)
      errors.pswd = "Password length should be greater or equal 6 character";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    logIn(email, pswd);
    navigate("/home");
  };

  return (
    <div className="align-center">
      <div className="portal-header">
        <h1>WABICARE LLC</h1>
        <h2>Employee Timesheet Portal</h2>
      </div>
      <div className="log-container">
        <h2>Login Page</h2>
        {/* {!errors && (
          <Alert variant="danger">
            {errors?.email} {errors?.pswd}
          </Alert>
        )} */}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={hundleEmailInput}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pswd}
              onChange={hundlePswdInput}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

LoginPage.proptype = {
  logIn: PropTypes.func.isRequired,
};
const mapStateToProp = (state) => {
  return {};
};
const mapDispatchToProp = {
  logIn: authACtion.logIn,
};
export default connect(mapStateToProp,mapDispatchToProp)(LoginPage);
