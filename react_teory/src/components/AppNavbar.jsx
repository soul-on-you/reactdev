import React from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "./UI/navbar/CustomNavbar";

function AppNavbar() {
  return (
    <CustomNavbar>
      <Link className="navbar__links" to="/">
        Home
      </Link>
      <Link className="navbar__links" to="posts">
        Posts
      </Link>
      <Link className="navbar__links" to="about">
        About
      </Link>
    </CustomNavbar>
  );
}

export default AppNavbar;
