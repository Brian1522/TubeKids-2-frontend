import clientAxios from './axios';
import { jwtDecode } from 'jwt-decode';

const tokenAuth = token => {
    if(token) {
        try {
            // Intenta decodificar el token
            const decodedToken = jwtDecode(token);

            // Verifica si el token ha expirado
            const currentTime = Date.now() / 1000; // Convertir a segundos
            if (decodedToken.exp < currentTime) {
                // Token ha expirado, eliminarlo de los encabezados
                delete clientAxios.defaults.headers.common['Authorization'];
                console.log('El token ha expirado');
            } else {
                // Token válido, configurarlo en los encabezados
                clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
        } catch (error) {
            // Error al decodificar el token, manejar el error
            console.log('Error al decodificar el token:', error);
            // Eliminar el token de los encabezados
            delete clientAxios.defaults.headers.common['Authorization'];
        }
    } else {
        // No se proporcionó ningún token, eliminarlo de los encabezados
        delete clientAxios.defaults.headers.common['Authorization'];
    }

}

export default tokenAuth;