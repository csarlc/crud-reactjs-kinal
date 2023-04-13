import axios from "axios";
const URL = "http://localhost:3000/api/";

export const listUserApi = async () => {
  try {
    const {
      data: { users },
    } = await axios.get(`${URL}read-users`);
    console.log(users);
    return users;
  } catch (error) {
    return error;
  }
};

export const deleteUserApi = async () => {};
