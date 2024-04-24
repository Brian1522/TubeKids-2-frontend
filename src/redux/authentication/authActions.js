// authActions.js
import { loginSuccessful, loginError,getUser,successfullRegister,logError,logOut } from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

export const  logIn  = (data) => async (dispatch) => {
    try {
        const response = await clientAxios.post('/api/auth/login', data);
        dispatch(loginSuccessful(response.data));
        // Obtener el usuario
        dispatch(authenticatedUser());
    } catch (error) {
        console.log(error);
        /*
        const alert = {
            msg: error.response.data.msg,
            categoria: 'alerta-error'
        } */
        dispatch(loginError(error));
    }
};


export const authenticatedUser = () => async (dispatch) => {
    const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get('/api/auth/session');
            dispatch(getUser(response.data));
        } catch (error) {
            console.log(error.response);
            dispatch(loginError(error.response));
        }
};


export const registerUser = (data) => async (dispatch) => {
    try {

        const response = await clientAxios.post('/api/users', data);
        dispatch(successfullRegister(response.data));
        // Obtener el usuario
        dispatch(authenticatedUser());
    } catch (error) {
        console.log(error);
        dispatch(logError(error));
    }
}

  // Cierra la sesión del usuario
  export const logOutAction = () => async (dispatch) => {
    dispatch(logOut());
}

