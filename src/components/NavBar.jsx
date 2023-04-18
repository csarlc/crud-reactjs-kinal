import { Link } from "react-router-dom";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
export const NavBar = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CRUD
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <Link to="/agregate" className="nav-link active" aria-current="page">
            <PersonAddTwoToneIcon></PersonAddTwoToneIcon>
          </Link>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className=" nav-item navbar-item-right ms-auto float-right glyphicon glyphicon-log-out">
            <Link
              className="nav-link"
              to="/login"
              onClick={() => cerrarSesion()}
            >
              <LogoutIcon fontSize="large"></LogoutIcon>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
