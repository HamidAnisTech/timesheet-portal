import React, { useState } from "react";

const authContext = React.createContext({
  isLoggedIn: undefined,
  onLogIn: undefined,
  onLogOut: undefined,
  users: undefined,
  loggedInuser: undefined,
});

export function AuthContextProvider(props) {
  let [isLoggedIn, setIsLoggedIn] = useState(true);
  let [users, setUsers] = useState([]);
  let [loggedInUser, setLoggedInUser] = useState({role:'admin'});

  function onLogIn(user) {
    setIsLoggedIn(true);
    setLoggedInUser(user);
  }
  function onLogOut() {
    setIsLoggedIn(false);
    setLoggedInUser({});
  }

  return (
    <authContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: onLogIn,
        onLogOut: onLogOut,
        users: users,
        setUsers: setUsers,
        loggedInUser: loggedInUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export default authContext;
