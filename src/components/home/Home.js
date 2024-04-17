
import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import AuthContext from '../../context/authentication/authContext';
const Home = () => {


    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { authenticatedUser } = authContext;

    useEffect(() => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);


    return ( 
        <div className="contenedor-app">
        <Sidebar />

        <div className="seccion-principal">
            <Bar />

            <main>
              
            </main>
        </div>
    </div>
     );
}
 
export default Home;