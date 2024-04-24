import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticatedUser, logOutAction } from "../../redux/authentication/authActions";


const Bar = () => {
    // Extraer la información de autenticación
    const user = useSelector((state) => state.authentication.user);
    const isAuthenticated = useSelector((state) => state.authentication.authenticated);
    const dispatch = useDispatch();
    const [isTrigger, setIsTrigger] = useState(false);
    useEffect(() => {
        if (isAuthenticated && !isTrigger) {
            setIsTrigger(true)
            dispatch(authenticatedUser());
        }
    }, [isAuthenticated, dispatch, isTrigger]);

    return (
        <header className="app-header">
            {user && user.user ? (
                <p className="nombre-usuario">
                    {user.user.name} <span>{user.user.lastname} </span>{" "}
                </p>
            ) : null}
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => dispatch(logOutAction())}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
}

export default Bar;