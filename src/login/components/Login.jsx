import React, { useState } from "react";
import { login } from "../api/ApiLogin";
import Swal from "sweetalert2";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Ha iniciado sesión con exito!",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/";
        } else {
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label text-black">Correo Electrónico</label>
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-black">Contraseña</label>
          <input
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e) => iniciarSesion(e)}
          className="btn btn-primary"
        >
          Iniciar Sesión
        </button>
      </form>
    </>
  );
};
