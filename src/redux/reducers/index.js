import { combineReducers } from "redux";
import users from "./userReducer";
import user from "./authReducer";
import apiCallsInProgress from './apiStatusReducer'

const rootReducer = combineReducers({
  users,
  user,
  apiCallsInProgress,
});

export default rootReducer;
