import { useAppSelector } from "../../hooks/ReduxHooks";

import { TailSpin } from "react-loader-spinner";

import {
  selectTodos,
  selectFilter,
  selectLoading,
} from "../../store/todoSlice";

import { TodoItem, ITodo } from "../TodoItem/TodoItem.component";

import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const completed = todos.filter((todo) => todo.completed);
  const active = todos.filter((todo) => !todo.completed);

  const loading = useAppSelector(selectLoading);
  const filter = useAppSelector(selectFilter);

  return (
    <ul className={styles.container}>
      {loading ? (
        <TailSpin color="#000000" width={30} height={30} />
      ) : (
        <>
          {filter === "completed" &&
            completed.map((todo: ITodo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          {filter === "all" &&
            todos.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)}
          {filter === "active" &&
            active.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)}
        </>
      )}
    </ul>
  );
};
