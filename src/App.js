import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from './components/home/Home';
import tokenAuth from "./config/token";
import PrivateRoute from "./components/routes/PrivateRoute";

//estados de context
import AuthState from "./context/authentication/authState";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact  path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        </Routes>
      </Router>
    </AuthState>
  );
};

export default App;
