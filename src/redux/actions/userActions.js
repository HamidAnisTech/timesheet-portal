import * as types from "./actionTypes";
import * as userApi from "../../api/usersApi";
import UserModel from "../../models/userModel";
import * as apiStatusActions from "../actions/apiStatusAction";

function GET_USERS_SUCCESS(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users,
  };
}

// get /users or /users/userId
export function getUsers() {
  return function (dispatch, getState) {
    let { email, userId, token } = getState().user;
    if (email !== process.env.REACT_APP_ADMIN_EMAIL) {
      // get User Details with userId
      dispatch(apiStatusActions.beginApiCall());
      userApi
        .getUserWIthId(userId, token)
        .thhen((result) => {
          let users = [];
          for (let key in result) {
            users.push({ ...result[key] });
          }
          dispatch(GET_USERS_SUCCESS(users));
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    } else {
      // get All Users Detail
      dispatch(apiStatusActions.beginApiCall());
      userApi
        .getUsers(token)
        .then((result) => {
          let users = [];
          for (let key in result) {
            users.push({ ...result[key] });
          }
          dispatch(GET_USERS_SUCCESS(users));
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }
  };
}

// Add or Edit user
function ADD_USER_SUCCESS(user) {
  return {
    type: types.ADD_USER_SUCCESS,
    user,
  };
}
function UPDATE_USER_SUCCESS(user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user,
  };
}
export function addUser(user) {
  return function (dispatch, getState) {
    let { token } = getState().user;
    if (!user.userId) {
      // add to authenticator
      dispatch(apiStatusActions.beginApiCall());
      userApi
        .registerUser(user.email, user.pswd)
        .then((userId) => {
          let newUser = new UserModel({ ...user, userId });
          userApi
            .saveUser(newUser, token)
            .then((data) => {
              dispatch(ADD_USER_SUCCESS(newUser));
            })
            .catch((err) => {
              throw new Error(err.message);
            });
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    } else {
      dispatch(apiStatusActions.beginApiCall());
      userApi
        .saveUser(user, token)
        .then((data) => {
          dispatch(UPDATE_USER_SUCCESS(user));
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }
  };
}

// Delte user
function DELETE_USER_OPTIMISTIC(user) {
  return {
    type: types.DELETE_USER_OPTIMISTIC,
    user,
  };
}

export function deleteUser(user) {
  return function (dispatch, getState) {
    let { token } = getState().user;
    dispatch(apiStatusActions.beginApiCall());
    userApi
      .deleteUser(user.userId, token)
      .then((data) => {
        dispatch(DELETE_USER_OPTIMISTIC(user));
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };
}
