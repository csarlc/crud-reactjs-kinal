import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/";
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${URL}login`, { email, password });
    const token = response.data.token;

    /* if(token){
        localStorage.setItem("token", token);
    }*/
    //token ? localStorage.setItem("token", token) : null;
    token && localStorage.setItem("token", token); //es lo mismo que el if de arriba, solo que sin el else
    return token;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal",
      text: "No se ha podido iniciar sesión",
    });
  }
};
