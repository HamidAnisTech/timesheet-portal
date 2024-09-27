import * as types from '../actions/actionTypes'; 
import initialState from './initialState'

function userReducer(state = initialState.users,action){
         switch(action.type){
            case types.LOGIN_USER_SUCCESS:
                return state;
            case types.ADD_USER_SUCCESS:
            return [...state , action.user]
            case types.GET_USERS_SUCCESS:
                return action.users
            default:
                return state
         }
}


export default userReducer;