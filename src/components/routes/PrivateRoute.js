import { Outlet, Navigate } from 'react-router-dom';
import {useEffect, useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import {authenticatedUser} from '../../redux/authentication/authActions';

const PrivateRoutes = () => {
    const isAuthenticated = useSelector((state) => state.authentication.authenticated);
    const [isTrigger, setIsTrigger] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        if( isAuthenticated && !isTrigger) {
            setIsTrigger(true)
            dispatch(authenticatedUser());
        }
    }, [isAuthenticated, dispatch, isTrigger]);

    return  !isAuthenticated ? <Navigate to= "/" /> : <Outlet/>
    
}

export default PrivateRoutes;
