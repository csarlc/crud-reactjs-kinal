import { Navigate, Route, Routes } from "react-router-dom";
import { UserTable } from "./user/components/UserTable";
import { Login } from "./login/components/Login";
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { NavBar } from "./components/NavBar";

export const AppRouter = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            isUserAuthenticated() ? (
              <UserTable />
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
