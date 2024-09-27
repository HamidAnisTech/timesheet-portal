import * as types from './actionTypes';
import * as userApi from '../../api/usersApi';

 function loginSUCCESS(){
    return {
        type:types.LOGIN_USER_SUCCESS,
    }
}

export function logIn() {
  return function (dispatch) {
      dispatch(loginSUCCESS());
  };
}


 function ADD_USER_SUCCESS(user){
    return {
      type: types.ADD_USER_SUCCESS,
      user
    };
}
export function addUser(user){
    return function(dispatch){
        userApi
          .saveUser(user)
          .then((user) => {
            dispatch(ADD_USER_SUCCESS(user));
          })
          .catch((err) => {
            console.log("Error-On Craeting User", err.message);
          })
    }
}


 function GET_USERS_SUCCESS(users) {
   return {
     type: types.GET_USERS_SUCCESS,
     users
   };
 }


 export function getUsers() {
   return function (dispatch) {
     userApi.getUsers().then((result) => {
      let users = [];
      for(let key in result ){
           users.push({...result[key],id:key})
      }
       dispatch(GET_USERS_SUCCESS(users));
     }).catch(err => console.log("Error-On Fetching Users", err.message))
   };
 }