import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import useDebounceULBI from "../hooks/useDebounceULBI";
import useInput from "../hooks/useInput";

const ListOfSecrch = () => {
  const input = useInput("");
  const [delay, setDelay] = useState(500);

  const searchTodos = async (query) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { query },
    });

    console.log(res);
  };

  //! MY REALIZATION
  useDebounce(input.value, () => searchTodos(input.value), delay);

  //! ULBI_TV REALIZATION
  const debouncedCallback = useDebounceULBI(searchTodos, delay);

  useEffect(() => {
    debouncedCallback(input.value);
  }, [input.value]);

  return (
    <div>
      <input type="text" placeholder="Search" {...input}></input>
    </div>
  );
};

export default ListOfSecrch;
