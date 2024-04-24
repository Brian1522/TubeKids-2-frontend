import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import Playlists from '../playlists/Playlist';
import { useDispatch, useSelector } from 'react-redux';
import { authenticatedUser } from "../../redux/authentication/authActions";

const Home = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authentication.authenticated);
    const [isTrigger, setIsTrigger] = useState(false);

    useEffect(() => {
        if (isAuthenticated && !isTrigger) {
            setIsTrigger(true)
            dispatch(authenticatedUser());
        }
    }, [isAuthenticated, dispatch, isTrigger]);

    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Bar />

                <main>
                    {/* <FormTarea /> */}

                    <div className="contenedor-tareas">
                        {/*play list*/}
                        <Playlists />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;