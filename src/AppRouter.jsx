import { Navigate, Route, Routes } from "react-router-dom";
import { UserTable } from "./user/components/UserTable";
import { Login } from "./login/components/Login";
import { isUserAuthenticated } from "./login/helpers/LoginHelper";

export const AppRouter = () => {
  return (
    <>
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
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
};
