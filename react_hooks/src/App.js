import { useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const password = useInput("");

  return (
    <div className="App">
      <input type="text" placeholder="Login" {...username}></input>
      <input type="text" placeholder="Password" {...password}></input>
      <button onClick={() => console.log(username)}>Click</button>
    </div>
  );
}

export default App;
