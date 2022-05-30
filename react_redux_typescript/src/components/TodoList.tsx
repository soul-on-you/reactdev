import React from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Loader from "./UI/loader/CustomLoader";
import Pagination from "./UI/pagination/CustomPagination";

interface ITodoListProps {}

const TodoList: React.FunctionComponent<ITodoListProps> = (props) => {
  const { todos, loading, error, page, pageCount } = useTypedSelector(
    (state) => state.todo
  );
  const {
    addTodoAction,
    removeTodoAction,
    fetchTodoAction,
    changeTodoPageAction,
  } = useActions();

  const addTodo = () => {
    const title = prompt("Введите задание", "");

    if (typeof title === "string")
      addTodoAction({ id: Date.now(), title, completed: false });
  };

  //   useEffect(() => {
  //     fetchTodoAction();
  //   }, [page]);

  return (
    <>
      <h1>Список задач</h1>
      <div className="btns">
        <button className="btn" onClick={() => fetchTodoAction()}>
          Загрузить задачи
        </button>
        <button className="btn" onClick={addTodo}>
          Добавить задачу
        </button>
        <button
          className="btn"
          onClick={() => {
            const todoID = prompt("Введите id задачи которого хотите удалить");
            if (typeof todoID === "string") removeTodoAction(+todoID);
          }}
        >
          Удалить задачу
        </button>
      </div>

      {pageCount && (
        <Pagination
          currentPage={page}
          totalPages={pageCount}
          setPage={(payload) => {
            changeTodoPageAction(payload);
            fetchTodoAction();
          }}
        />
      )}
      {
        loading && <Loader />
        //   <h2>Идет загрузка пользователей...</h2>
      }
      {error && <h2>Ошибка: {error}</h2>}
      {todos.length > 0 ? (
        <div className="users">
          {todos.map((todo) => (
            <div className="user" key={todo.id}>
              {todo.id}) {todo.title}:
              {todo.completed ? "Выполнено" : "Невыполенно"}
              <button className="btn" onClick={() => removeTodoAction(todo.id)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ marginTop: 20 }}>Задач пока нет</h2>
      )}
    </>
  );
};

export default TodoList;
