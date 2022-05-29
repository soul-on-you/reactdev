import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  // addCashAction,
  asyncAddCashAction,
  asyncGetCashAction,
  // getCashAction,
} from "./store/cashReducer";
import {
  // addCustomerAction,
  asyncAddCustomerAction,
  asyncAddManyCustomerAction,
  asyncDeleteCustomerAction,
  // deleteCustomerAction,
} from "./store/customerReducer";

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const addCash = (cash) => {
    // dispatch(addCashAction(cash));
    dispatch(asyncAddCashAction(cash));
  };

  const getCash = (cash) => {
    // dispatch(getCashAction(cash));
    dispatch(asyncGetCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = { id: nanoid(10), name };
    // dispatch(addCustomerAction(customer));
    dispatch(asyncAddCustomerAction(customer));
  };

  const deleteCustomer = (id) => {
    // dispatch(deleteCustomerAction(id));
    dispatch(asyncDeleteCustomerAction(id));
  };

  return (
    <div className="App">
      <div className="count">{cash}</div>
      <div className="btns">
        <button className="btn" onClick={() => addCash(+prompt())}>
          Пополнить
        </button>
        <button className="btn" onClick={() => getCash(+prompt())}>
          Снять
        </button>
      </div>

      <hr style={{ marginBottom: 30, marginTop: 30, width: "100%" }} />
      <div className="btns">
        <button
          className="btn"
          onClick={() => dispatch(asyncAddManyCustomerAction())}
        >
          Получить юзеров из базы
        </button>
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
