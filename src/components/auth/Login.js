import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from "../../redux/authentication/authActions";


const Login = (props) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authentication.authenticated);
    const [isTrigger, setIsTrigger] = useState(false);
    // se define para nevegar en las rutas de la aplicacion
    const navigate = useNavigate();
    // En caso de que el password o usuario no exista
    useEffect(() => {
        if (isAuthenticated && !isTrigger) {
            setIsTrigger(true);
            navigate('/home');
        }
    }, [isAuthenticated, navigate, isTrigger]);

    // State para iniciar sesión
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = (e) => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            //   mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // Pasarlo al action
        dispatch(logIn({ email, password }));
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión" 
                            />
                    </div>
                </form>

                <Link to={'/register'} className="enlace-cuenta">
                    Registrar
                </Link>
            </div>
        </div>
    );
}

export default Login;