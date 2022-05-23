import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/UI/button/CustomButton";
import CustomInput from "../components/UI/input/CustomInput";

function Login({ SetAuth }) {
  const router = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const SingIn = (e) => {
    e.preventDefault();
    console.log(`Logined: ${login}:${password}`);
    SetAuth(true);
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

        <CustomButton onClick={SingIn}>Опубликовать</CustomButton>
      </form>
    </div>
  );
}

export default Login;
