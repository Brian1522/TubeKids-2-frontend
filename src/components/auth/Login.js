import React, { useState, useContext, useEffect } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
//import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/authentication/authContext'

const Login = (props) => {

    // se define para nevegar en las rutas de la aplicacion
    const navigate = useNavigate();
    // extraer los valores del context
  //  const alertaContext = useContext(AlertaContext);
  //  const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, logIn } = authContext;

      // En caso de que el password o usuario no exista
      useEffect(() => {
        if(authenticated) {
            navigate('/home');
        }
        /*
        if(message) {
            mostrarAlerta(message.msg, message.categoria);
        } */
        // eslint-disable-next-line
    }, [message, authenticated, props.history]);

    // State para iniciar sesión
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
         //   mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // Pasarlo al action
        logIn({ email, password });
    }



    return ( 
        <div className="form-usuario">
          

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;