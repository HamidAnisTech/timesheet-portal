import * as types from "./actionTypes";
import * as userApi from "../../api/usersApi";
// import createStore from "../../redux/configureStore"; // Import your persistor
// const { persistor } = createStore();
function loginSUCCESS(user) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    user,
  };
}

// Authenticate user
export function logIn(email, pswd) {
  return function (dispatch) {
    userApi
      .loginUser(email, pswd)
      .then((data) => {
        let { uid, token } = data;
        let userId = uid;
        let isLoggedIn = true;
        let lastLogin = new Date().toISOString();
        dispatch(loginSUCCESS({ token, userId, isLoggedIn, lastLogin, email }));
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };
}

function logoutSUCCESS() {
  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
}

export function logout() {
  return function (dispatch) {
    userApi
      .logoutUser()
      .then((_) => {
        dispatch(logoutSUCCESS());
        //work on clearing the persisted state while logout
        // persistor.purge(); // Clears persisted state
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };
}
