import React, { useEffect, useState } from "react";
import { listUserApi } from "../api/UserApi";

export const UserTable = () => {
  const [users, setUsers] = useState([]);

  const reload = async () => {
    const result = await listUserApi();
    setUsers(result);
  };

  useEffect(() => {
    reload();
    console.log(users);
  }, []);

  return (
    <>
      <h1 className="text-decoration-underline">CRUD DE USUARIOS</h1>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de Usuario</th>
              <th>Correo Electrónico</th>
              <th>ROL</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userActual) => {
              return (
                <tr key={userActual._id}>
                  <td>{userActual._id}</td>
                  <td>{userActual.username}</td>
                  <td>{userActual.email}</td>
                  <td>{userActual.rol}</td>
                  <td>
                    <button className="btn btn-danger margen-button">
                      Eliminar
                    </button>
                    <button className="btn btn-warning margen-button">
                      Editar
                    </button>
                    <button className="btn btn-success">Ver</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
