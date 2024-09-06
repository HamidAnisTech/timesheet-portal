import React, { useState } from "react";

const authContext = React.createContext({
  isLoggedIn: undefined,
  onLogIn: undefined,
  onLogOut: undefined,
});

export function AuthContextProvider(props){
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    function onLogIn() {
      setIsLoggedIn(true);
    }
    function onLogOut() {
      setIsLoggedIn(false);
    }

    return (
      <authContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogIn: onLogIn, onLogOut: onLogOut }}
      >
        {props.children}
      </authContext.Provider>
    );
}

export default authContext;
