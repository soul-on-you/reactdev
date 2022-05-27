import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";
import getPagesCount from "../utils/getPagesCount";
import { nanoid } from "nanoid";
import Loader from "./UI/Loader";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const observerRefObj = useRef();
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { _limit: limit, _page: page },
    });

    setTodos([...todos, ...res.data]);

    const totalCount = res.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));

    setLoading(false);
  };

  useObserver(observerRefObj, isLoading, page < totalPages, () => {
    setPage(page + 1);
    console.log(page);
  });

  useEffect(() => {
    fetchTodos();
  }, [page]);

  return (
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {isLoading && <Loader />}
      </div>

      <div ref={observerRefObj}></div>
    </div>
  );
};

export default List;
