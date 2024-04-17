import { Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ element: Element, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, authenticatedUser, loading } = authContext;

    useEffect(() => {
        authenticatedUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Route
        {...props}
        element={authenticated && !loading ? <Element {...props} /> : <Navigate to="/" replace />}
      />
    );
}

export default PrivateRoute;
