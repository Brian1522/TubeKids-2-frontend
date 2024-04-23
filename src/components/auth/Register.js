import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import AlertaContext from '../../context/alertas/alertaContext';
//import AuthContext from '../../context/autenticacion/authContext';
import { registerUser } from "../../context/authentication/authActions";


const Register = (props) => {

    // extraer los valores del context
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authenticated);


    const [isTrigger, setIsTrigger] = useState(false);
    // En caso de que el password o usuario no exista
    useEffect(() => {
        // Imprime en la consola el número de veces que se ejecuta el useEffect
        if (isAuthenticated && !isTrigger) {
            setIsTrigger(true);
            navigate('/home');
        }
        /*
        if(message) {
            mostrarAlerta(message.msg, message.categoria);
        } */
        // eslint-disable-next-line
    }, [isAuthenticated, isTrigger]);

    // State para iniciar sesión
    const [user, saveUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        cellphone: '',
        role: '',
        country: '',
        pin: ''

    });

    // extraer de usuario
    const { name, email, password, cellphone, role, country, pin, lastname } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (name.trim() === '' ||
            lastname.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            cellphone.trim() === '' ||
            role.trim() === '' ||
            country.trim() === '' ||
            pin.trim() === ''
        ) {
            // mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            console.log("Todos los campos son obligatorios");
            return;
        }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            // mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            console.log("El password debe ser de al menos 6 caracteres");
            return;
        }

        // Los 2 passwords son iguales
        /*
        if(password !== confirm) {
            //mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            console.log("Los passwords no son iguales");
            return;
        }
        */
        // Pasarlo al action


        dispatch(registerUser({
            name,
            lastname,
            email,
            password,
            cellphone,
            role,
            country,
            pin
        }));
    }

    return (
        <div className="form-usuario">
            {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="lastname">Apellidos</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Tus apellidos"
                            value={lastname}
                            onChange={onChange}
                        />
                    </div>

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
                        <label htmlFor="cellphone">Cellphone</label>
                        <input
                            type="text"
                            id="cellphone"
                            name="cellphone"
                            placeholder="Celular"
                            value={cellphone}
                            onChange={onChange}
                        />
                    </div>


                    <div className="campo-form">
                        <label htmlFor="role">Role</label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Role"
                            value={role}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="role">Pais</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="country"
                            value={country}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="role">PIN</label>
                        <input
                            type="number"
                            id="pin"
                            name="pin"
                            placeholder="PIN"
                            value={pin}
                            onChange={onChange}
                        />
                    </div>

                    {/* <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repite tu Password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div> */}

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default Register;