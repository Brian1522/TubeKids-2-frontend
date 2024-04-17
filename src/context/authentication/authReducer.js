import { 
    SUCCESSFUL_REGISTRATION,
    LOG_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';


const reducer = (state, action) => {
    switch(action.type) {
        case SUCCESSFUL_REGISTRATION:
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case GET_USER: 
            return {
                ...state,
                authenticated: true,
                user: action.payload, 
                loading: false
            }
        case LOG_OUT:
        case LOGIN_ERROR:
        case LOG_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload, 
                loading: false
            }
        
        default:
            return state;
    }
}

export default reducer;