import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("react_dev_auth")) setIsAuth(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
