// Layout.js
import React from 'react';
import Bar from './Bar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
            <Bar />
            <main>{children}</main>
        </div>
    </div>
    );
}

export default Layout;
