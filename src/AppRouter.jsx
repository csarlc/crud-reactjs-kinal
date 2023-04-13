import { Route, Routes } from "react-router-dom";
import { UserTable } from "./user/components/UserTable";
import { Login } from "./login/components/Login";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTable />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
};
