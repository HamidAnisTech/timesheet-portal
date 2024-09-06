import React,{useContext} from 'react'
import LoginForm from "./components/loginForms/login";
import Dashboard from "./components/dashboard/dashboard";
import authContext from "./components/context/authcontext";

function App() {
  const ctx = useContext(authContext)
  return (
    <>
      {!ctx.isLoggedIn && <LoginForm />}
    </>
  );
}

export default App;
