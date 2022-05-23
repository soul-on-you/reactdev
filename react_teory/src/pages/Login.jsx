import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/UI/button/CustomButton";
import CustomInput from "../components/UI/input/CustomInput";
import { AuthContext } from "../context";

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  const SingIn = (e) => {
    e.preventDefault();
    console.log(`Logined: ${login}:${password}`);
    setIsAuth(true);
    localStorage.setItem("react_dev_auth", `${login}:${password}`);
    router(`/posts`);
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <form action="/login">
        <CustomInput
          value={login}
          placeholder="Логин"
          onChange={(e) => setLogin(e.target.value)}
        ></CustomInput>

        <CustomInput
          value={password}
          placeholder="пороль"
          onChange={(e) => setPassword(e.target.value)}
        ></CustomInput>

        <CustomButton onClick={SingIn}>Войти</CustomButton>
      </form>
    </div>
  );
}

export default Login;
