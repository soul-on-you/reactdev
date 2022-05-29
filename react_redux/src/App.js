import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const dispatch = useDispatch();

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div>
      <div className="count">{cash}</div>
      <div className="btns">
        <button
          className="btn"
          // onClick={() => dispatch(asyncIncrementCreator())}
          onClick={() => addCash(+prompt())}
        >
          Пополнить
        </button>
        <button
          className="btn"
          // onClick={() => dispatch(asyncDecrementCreator())}
          onClick={() => getCash(+prompt())}
        >
          Снять
        </button>
        {/* <button className="btn" onClick={() => dispatch(fetchUsers())}>
          ПОЛУЧИТЬ ЮЗЕРОВ--
        </button> */}
      </div>
      {/* <div className="users">
        {users.map((user) => (
          <div className="user">{user.name}</div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
