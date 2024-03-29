import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchUserAction } from "../store/action-creators/user";

export interface IUserListProps {}

export default function UserList(props: IUserListProps) {
  const { users, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
    console.log("useEffect USERLIST");
  }, [dispatch]);

  if (isLoading) return <h2>Идет загрузка...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="list__wrapper">
      {users.length > 0 ? (
        <div className="post__list">
          {users.map((user) => (
            <div className="user" key={user.id}>
              {user.id}){user.name}:{user.username}:{user.email}
            </div>
          ))}
        </div>
      ) : (
        <h3>Пользователей пока нет</h3>
      )}
    </div>
  );
}
