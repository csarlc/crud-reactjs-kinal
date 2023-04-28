import React, { useEffect, useState } from "react";
import { DeleteUSer, listUserApi } from "../api/UserApi";
import Swal from "sweetalert2";
import { User } from "../models/ModelUser";
import { UpdateUser } from "./UpdateUser";

export const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(User);
  const [showModal, setShowModal] = useState(false)

  const reload = async () => {
    const result = await listUserApi();
    setUsers(result);
  };

  const handleOpenModal = (u) => {
    setShowModal(true);
    setUser(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminar = async(id)=>{
    let result = await DeleteUSer(id)
    if(result){
      setUsers(users.filter(u=> u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el usuario correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el usuario!",
      });
    }
  }

  useEffect(() => {
    reload();
    
  }, [showModal]);

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
                    <button className="btn btn-danger margen-button" onClick={()=>{eliminar(userActual._id)}}>
                      Eliminar
                    </button>
                    <button className="btn btn-warning margen-button" onClick={()=>handleOpenModal(userActual)}>
                      Editar
                    </button>
                    <button className="btn btn-success">Ver</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateUser userEdit={user} isOpen={showModal} onClose={()=>{handleCloseModal()}}></UpdateUser>
      </div>
    </>
  );
};
