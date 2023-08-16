import { useAppDispatch } from "../../hooks/ReduxHooks";

import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";

import styles from "./TodoItem.module.css";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const removeTask = (id: string) => dispatch(removeTodo({ id }));
  const toggleTodo = (id: string) => dispatch(toggleTodoCompleted({ id }));
  return (
    <li className={styles.todo} key={todo.id}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={styles.text}>{todo.text}</span>
      <span className={styles.remove_btn} onClick={() => removeTask(todo.id)}>
        &times;
      </span>
    </li>
  );
};
