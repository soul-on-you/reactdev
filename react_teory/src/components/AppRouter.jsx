import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";

function AppRouter() {
  // const [isAuth, setIsAuth] = useState(false);
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
}

export default AppRouter;
