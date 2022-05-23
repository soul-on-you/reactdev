import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../router";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) =>
        route.path === "/login" ? (
          <Route
            {...route}
            key={route.path}
            element={<Login SetAuth={setIsAuth} />}
          />
        ) : (
          <Route {...route} key={route.path} />
        )
      )}
    </Routes>
  );
}

export default AppRouter;
