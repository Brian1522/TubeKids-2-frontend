import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from './components/home/Home';
import Videos from '../src/components/videos/Videos';
import Register from "./components/auth/Register";
import tokenAuth from "./config/token";
import PrivateRoute from "./components/routes/PrivateRoute";
import Layout from "./components/layout/Layout";
import { store } from './app/store'
import { Provider } from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.css';
// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = () => {
    return (
      <Provider  store={store}>
        <Router>
          <Routes>
               {/*Rutas privadas*/}
            <Route element={<PrivateRoute />}>
                  {/*Ruta de home*/}
                  <Route element={<Home/>} path="/home" exact/>
                   {/*Ruta de videos*/}
                  <Route element={<Layout>< Videos/></Layout>} path="/videos" exact/>
              </Route>
              {/*Rutas no  privadas*/}
              <Route exact path="/" element={<Login />} />
              <Route element={<Register/>} path="/register" exact/>
          </Routes>
        </Router>
      </Provider >
    );
  };
  

export default App;
