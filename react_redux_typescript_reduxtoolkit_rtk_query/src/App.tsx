import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
