import axios from "axios";
import React from "react";
import { nanoid } from "nanoid";
import Loader from "./UI/Loader";
import { useRequest } from "../hooks/useRequest";

const ListForUseRequest = () => {
  const fetchTodos = () => {
    return axios.get(
      "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
    );
  };

  const [todos, isLoading, error] = useRequest(fetchTodos);

  if (error) {
    return <h1>Ошибка: {error}</h1>;
  }

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {todos.map((task, index) => (
            <h3
              key={nanoid()}
              style={{
                display: "flex",
                justifyContent: "left",
                paddingLeft: 20,
                marginTop: 10,
                border: "2px solid teal",
              }}
            >
              {index + 1}){task.title}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListForUseRequest;
