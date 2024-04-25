import React, { useState } from "react";
import { useDispatch } from "react-redux";


const Users = () => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    pin: "",
    avatar: "",
    age: "",
  });

  const { fullName, pin, avatar, age } = user;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //dispatch(addUser(user));

    setUser({
      fullName: "",
      pin: "",
      avatar: "",
      age: "",
    });

    setShowForm(false);
  };

  // Arreglo de prueba para simular la lista de usuarios
  const users = [
    { id: 1, name: "Alanna", age: 15 },
    { id: 2, name: "Pedro", age: 11 },
    { id: 3, name: "Sophia", age:  8 },
  ];

  return (
    <div>
         <button
        className="btn btn-primario"
        onClick={() => setShowForm(true)}
        style={{ marginBottom: "10px" }} // Añade un margen inferior al botón
      >
        <i className="fas fa-user-plus" style={{ marginRight: "5px" }} /> Agregar Usuario {/* Icono de Font Awesome */}
      </button>
      {!showForm ? (
        <div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-secundario"
            onClick={() => setShowForm(false)}
            style={{ marginBottom: "10px" }} // Añade un margen inferior al botón
          >
            Cancelar
          </button>
          <div>
            <form onSubmit={onSubmit}>
              <div className="campo-form">
                <label htmlFor="fullName">Nombre Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={onChange}
                />
              </div>
              <div className="campo-form">
                <label htmlFor="pin">PIN</label>
                <input
                  type="number"
                  id="pin"
                  name="pin"
                  value={pin}
                  onChange={onChange}
                />
              </div>
              <div className="campo-form">
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  value={avatar}
                  onChange={onChange}
                />
              </div>
              <div className="campo-form">
                <label htmlFor="age">Edad</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={onChange}
                />
              </div>
              <div className="campo-form">
                <input
                  type="submit"
                  className="btn btn-primario btn-block"
                  value="Guardar"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;