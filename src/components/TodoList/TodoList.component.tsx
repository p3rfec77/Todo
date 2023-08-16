import { useAppSelector } from "../../hooks/ReduxHooks";

import { selectTodos, selectFilter } from "../../store/todoSlice";

import { TodoItem, ITodo } from "../TodoItem/TodoItem.component";

import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const completed = todos.filter((todo) => todo.completed);
  const active = todos.filter((todo) => !todo.completed);

  const filter = useAppSelector(selectFilter);

  return (
    <ul className={styles.container}>
      {filter === "completed" &&
        completed.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)}
      {filter === "all" &&
        todos.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)}
      {filter === "active" &&
        active.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)}
    </ul>
  );
};
