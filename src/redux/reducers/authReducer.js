import * as types from "../actions/actionTypes";
import initialState from "./initialState";
function authReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      // let copyState = { ...initialState };
      // copyState = { ...copyState, user: action.user };
      // return copyState;
      return action.user;
    case types.LOGOUT_USER_SUCCESS: // clear and reset state
      return state;
    default:
      return state;
  }
}

export default authReducer;
