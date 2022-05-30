import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr style={{ marginBottom: 30, marginTop: 30, width: "100%" }} />
      <TodoList />
    </div>
  );
}

export default App;
