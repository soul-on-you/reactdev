import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

function Layout() {
  return (
    <AntdLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </AntdLayout>
  );
}

export default Layout;
