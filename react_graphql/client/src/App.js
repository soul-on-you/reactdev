import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import { CREATE_USER } from "./mutations/user";
import { GET_ALL_USERS, GET_USER } from "./query/user";

function App() {
  const usernameInput = useInput("");
  const ageInput = useInput("");
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
    // pollInterval: 500, //!ЗАПРОС БУДЕТ ПОВТОРЯТЬСЯ КАЖДЫЕ 500 МС
  });
  const {
    data: dataGUQ,
    loading: loadingGUQ,
    error: errorGUQ,
  } = useQuery(GET_USER, {
    variables: { id: "1plP-epULu" },
  });
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setUsers([...data.getAllUsers]);
    }
    console.log(data);
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: { username: usernameInput.value, age: +ageInput.value },
      },
    }).then(({ data }) => {
      console.log(data);
      setUsers([...users, data.createUser]);
    });

    // console.log(`${usernameInput.value}:${ageInput.value}`);
    usernameInput.onChange({ target: { value: "" } });
    ageInput.onChange({ target: { value: "" } });
  };

  const getAll = (e) => {
    e.preventDefault();

    if (usernameInput.value && ageInput.value) {
      console.log(`${usernameInput.value}:${ageInput.value}`);
      // refetch(); рефетч обновит data, лучше использовать его, но тут я получаю
      // посты которые могли и не обновляться, мне их просто нужно показать, поэтому refetch не подходит
      setUsers([...data.getAllUsers]);
    } else {
      setUsers([dataGUQ.getUser]);
    }
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Username" {...usernameInput} />
        <input type="text" placeholder="Password" {...ageInput} />
        <div className="btns">
          <button onClick={addUser}>Создать</button>
          <button onClick={(e) => getAll(e)}>Получить</button>
        </div>
      </form>
      <div>
        {users.map((user) => (
          <div className="user" key={user.id}>
            {user.id}: {user.username} {user.age}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
