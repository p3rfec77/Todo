import { useAppSelector } from "../../hooks/ReduxHooks";

import { selectTodos } from "../../store/todoSlice";

import { TodoItem, ITodo } from "../TodoItem/TodoItem.component";

import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <ul className={styles.container}>
      {todos.map((todo: ITodo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
