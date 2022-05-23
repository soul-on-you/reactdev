import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import CustomButton from "./UI/button/CustomButton";
import CustomNavbar from "./UI/navbar/CustomNavbar";

function AppNavbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("react_dev_auth");
    router(`/login`);
  };

  return (
    <CustomNavbar>
      <div className="navbar__links">
        <Link className="navbar__links" to="/">
          Home
        </Link>
        <Link className="navbar__links" to="posts">
          Posts
        </Link>
        <Link className="navbar__links" to="about">
          About
        </Link>
      </div>
      <div style={{ marginLeft: 200 }}>
        {isAuth ? (
          <CustomButton onClick={logout}>Выйти</CustomButton>
        ) : (
          <Link className="navbar__links" to="login">
            Login
          </Link>
        )}
      </div>
    </CustomNavbar>
  );
}

export default AppNavbar;
