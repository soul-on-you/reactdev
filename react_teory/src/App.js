import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
