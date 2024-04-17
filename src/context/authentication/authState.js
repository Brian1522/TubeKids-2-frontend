import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    SUCCESSFUL_REGISTRATION,
    LOG_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null, 
        message: null, 
        loading: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        try {

            const response = await clientAxios.post('/api/auth/login', data);
      

            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: response.data
            });

            // Obtener el usuario
            authenticatedUser();
        } catch (error) {
            // console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOG_ERROR,
                payload: alert
            })
        }
    }

    // Retorna el usuario autenticado
    const authenticatedUser = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get('/api/auth/session');
            console.log("RESPUESTA DEL BACK END AUTH USER",response);
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesión
    const logIn = async data => {
        try {
            const response = await clientAxios.post('/api/auth/login', data);
            
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });
            console.log("RESPUESTA DEL BACK END LOG IN",response);
            // Obtener el usuario
             authenticatedUser();
        } catch (error) {
            console.log(error);
            const alert = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    // Cierra la sesión del usuario
    const logOut = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                logIn,
                authenticatedUser,
                logOut
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;
