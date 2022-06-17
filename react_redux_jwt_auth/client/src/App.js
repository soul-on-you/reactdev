import React from "react";
import Counter from "./pages/counter/Counter.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Page404 from "./pages/page404/Page404.jsx";
import Login from "./pages/login/Login.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="counter" element={<Counter />} />
        </Route>

        {/* error route */}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
