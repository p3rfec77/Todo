import { FcCheckmark } from "react-icons/fc";
import { useAppDispatch } from "../../hooks/ReduxHooks";

import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";

import styles from "./TodoItem.module.css";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const removeTask = (id: string) => dispatch(removeTodo(id));
  const toggleTodo = (id: string) => dispatch(toggleTodoCompleted(id));
  return (
    <li className={styles.todo} key={todo.id}>
      <div className={styles.container}>
        <label className={styles.checkbox_container}>
          {todo.completed && <FcCheckmark className={styles.check_mark} />}
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
        </label>
        <span
          className={styles.title}
          style={
            todo.completed
              ? { textDecoration: "line-through", color: "rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          {todo.title}
        </span>
      </div>
      <span className={styles.remove_btn} onClick={() => removeTask(todo.id)}>
        &times;
      </span>
    </li>
  );
};
