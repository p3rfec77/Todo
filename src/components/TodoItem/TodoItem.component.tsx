import { observer } from "mobx-react-lite";
import { FcCheckmark } from "react-icons/fc";

import todoStore from "../../stores/todoSlice";

import styles from "./TodoItem.module.css";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem = observer(({ todo }: TodoItemProps) => {
  return (
    <li className={styles.todo} key={todo.id}>
      <div className={styles.container}>
        <label className={styles.checkbox_container}>
          {todo.completed && <FcCheckmark className={styles.check_mark} />}
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoStore.toggleTodoCompleted(todo.id)}
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
      <span
        className={styles.remove_btn}
        onClick={() => todoStore.removeTodo(todo.id)}
      >
        &times;
      </span>
    </li>
  );
});
