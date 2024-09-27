import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "./LoginPage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userActions";
const LoginPage = ({ users, getUsers, logIn }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [user, setUser] = useState();
  const [isFormValid, setFormValid] = useState(true);
  const navigate = useNavigate();

  let hundleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  let hundlePswdInput = (e) => {
    setPswd(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let currentUser = users?.find((user) => user.email === email);
    if (!currentUser) {
      setFormValid(false);
    } else {
      setUser(currentUser);
      navigate("/home");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="align-center">
      <div className="portal-header">
        <h1>WABICARE LLC</h1>
        <h2>Employee Timesheet Portal</h2>
      </div>
      <div className="log-container">
        <h2>Login Page</h2>
        {!isFormValid && (
          <Alert variant="danger">"Invalid Email or Password"</Alert>
        )}
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

LoginPage.prototype = {
  users: PropTypes.array.isRequired,
  logIn: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProp = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProp = {
  getUsers: userAction.getUsers,
  logIn: userAction.logIn,
};
export default connect(mapStateToProp, mapDispatchToProp)(LoginPage);
