import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/customerReducer";

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = { id: nanoid(10), name };
    dispatch(addCustomerAction(customer));
  };

  const deleteCustomer = (id) => {
    dispatch(deleteCustomerAction(id));
  };

  return (
    <div className="App">
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

      <hr style={{ marginBottom: 30, marginTop: 30, width: "100%" }} />

      <div className="btns">
        <button className="btn" onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </button>

        <button className="btn" onClick={() => deleteCustomer(prompt())}>
          Удалить клиента
        </button>
      </div>

      {customers.length > 0 ? (
        <div className="users">
          {customers.map((customer) => (
            <div key={customer.id} className="user">
              {customer.id}: {customer.name}
              <button
                className="btn"
                onClick={() => deleteCustomer(customer.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ marginTop: 25 }}>Клиентов пока нет</h2>
      )}
    </div>
  );
}

export default App;
