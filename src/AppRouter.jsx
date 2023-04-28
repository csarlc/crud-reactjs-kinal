import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./login/components/Login";
import {ListUser} from "./user/components/ListUser"
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { NavBar } from "./components/NavBar";
import { CreateUser } from "./user/components/CreateUser";

export const AppRouter = () => {
  return (
    <>
      {isUserAuthenticated() && <NavBar></NavBar>}
      <Routes>
        <Route
          path="/"
          element={
            isUserAuthenticated() ? (
              <ListUser />
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route
          path="/agregate"
          element={
            isUserAuthenticated() ? (
              <CreateUser />
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route
          path="/login"
          element={
            !isUserAuthenticated() ? (
              <Login></Login>
            ) : (
              <Navigate to="/"></Navigate>
            )
          }
        ></Route>
      </Routes>
    </>
  );
};
