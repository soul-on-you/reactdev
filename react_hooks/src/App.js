import React from "react";
import "./App.css";
import Hover from "./components/Hover";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const password = useInput("");



  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Login" {...username}></input>
        <input type="text" placeholder="Password" {...password}></input>
        <button onClick={() => console.log(username)}>Click</button>
      </div>
      <hr style={{ marginBottom: 30, marginTop: 30, width: "100%" }} />
      <Hover />
    </div>
  );
}

export default App;
