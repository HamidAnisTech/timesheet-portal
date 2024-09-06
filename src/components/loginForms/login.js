import React, {useState, useEffect,useContext,useReducer,useRef} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import authContext from '../context/authcontext';

const emailReducer = (state,action) => {
  switch(action.type){
    case 'EMAIL_INPUT':
      return {value:action.val,isValid:undefined}
    case 'EMAIL_VALID':
      return {value:action.val,isValid:action.val.includes('@')}
    default :
    return state
  }
}
const pswdReducer = (state,action) => {

}

const LoginForm = () => {

  const ctx = useContext(authContext);
  const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isValid:undefined});
  const [pswdState,dispatchPswd] = useReducer(emailReducer,{value:'',isValid:undefined});
  const [error, setError] = useState("");
  //console.log(emailState);
  let hundleEmailInput = (e) => {
    dispatchEmail({val:e.target.value , type:'EMAIL_INPUT'});
  }
  let onBlurHundlerEmail = (e) => {
    dispatchEmail({ val: e.target.value, type: "EMAIL_VALID" });
  //   console.log(emailState)
  //  borderStyle = {
  //     border:emailState.isValid || emailReducer.isValid === undefined? "": "1px red solid",         
  //   }
  };

  let hundlePswdInput = (e) => {
  }
  let onBlurHundlerPswd = (e) => {};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailState.value || !pswdState.value) {
      setError("Both fields are required");
      return;
    }
    // Clear error if all fields are filled
    setError("");
    // Mock login logic
    if (
      emailState.value === "user@example.com" &&
      pswdState.value === "password"
    ) {
      alert("Login successful");
    }
  };

    useEffect(() => {}, []);

  return (
    <div className="align-center">
      <div className="portal-header">
        <h1>WABICARE LLC</h1>
        <h2>Employee Timesheet Portal</h2>
      </div>
      <div className="log-container">
        <h2>Login Page</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={emailState.value}
              onChange={hundleEmailInput}
              onBlur={onBlurHundlerEmail}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pswdState.value}
              onChange={hundlePswdInput}
              onBlur={onBlurHundlerPswd}
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

export default LoginForm;
