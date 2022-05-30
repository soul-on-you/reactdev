import { nanoid } from "nanoid";
import React from "react";
import { useActions } from "../hooks/useAction";
// import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Loader from "./UI/loader/CustomLoader";
// import {
//   addUserAction,
//   deleteUserAction,
//   fetchUserAction,
// } from "../store/action-creators/user";

interface UserListProps {}

const UserList: React.FC<UserListProps> = (props) => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  //   const dispatch = useTypedDispatch();
  const { addUserAction, deleteUserAction, fetchUserAction } = useActions();

  const addUser = () => {
    const name = prompt("Введите имя пользователя", "");
    const email = prompt("Введите email пользователя", "");

    if (typeof name === "string" && typeof email === "string")
      addUserAction({
        id: nanoid(6),
        name,
        email,
      });
  };

  const deleteUser = (id: number | string) => {
    deleteUserAction(id);
  };

  return (
    <>
      <h1>Список пользователей</h1>
      <div className="btns">
        <button className="btn" onClick={() => fetchUserAction()}>
          Загрузить пользователей
        </button>
        <button className="btn" onClick={addUser}>
          Добавить пользователя
        </button>
        <button
          className="btn"
          onClick={() => {
            const userID = prompt(
              "Введите id пользователя которого хотите удалить"
            );
            if (typeof userID === "string") deleteUser(userID);
          }}
        >
          Удалить пользователя
        </button>
      </div>

      {loading && (
        //   <h2>Идет загрузка пользователей...</h2>
        <Loader />
      )}
      {error && <h2>Ошибка: {error}</h2>}
      {users.length > 0 ? (
        <div className="users">
          {users.map((user) => (
            <div className="user" key={user.id}>
              {user.id}) {user.name}:{user.email}
              <button className="btn" onClick={() => deleteUser(user.id)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ marginTop: 20 }}>Пользователей пока нет</h2>
      )}
    </>
  );
};

export default UserList;
