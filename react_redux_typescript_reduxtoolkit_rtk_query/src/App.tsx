import React from "react";
import "./App.css";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import Counter from "./components/Counter";
import PostContainer from "./components/PostContainer";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <UserList />
      <hr />
      <div style={{ display: "flex" }}>
        <div style={{ display: "block" }}>
          <ClientForm />
          <ClientList limit={11}/>
        </div>
        <div style={{ display: "block" }}>
          <ClientForm />
          <ClientList limit={5} />
        </div>
      </div>
      <hr />
      <PostContainer />
    </div>
  );
}

export default App;