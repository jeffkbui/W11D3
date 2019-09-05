import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const CURRENT_ERRORS = "CURRENT_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
}); 

export const receiveErrors = (errors) => ({
    type: CURRENT_ERRORS,
    errors
});

export const loginAction = (user) => (dispatch) => {
    login(user).then( (user) => dispatch(receiveCurrentUser(user)) )
};

export const logoutAction = () => { 
    logout().then( () => dispatch(logoutCurrentUser()) )
};

export const signupAction = (user) => {
    signup(user).then( (user) => dispatch(receiveCurrentUser(user)) )
};