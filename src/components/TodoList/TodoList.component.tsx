import { observer } from "mobx-react-lite";
import { TailSpin } from "react-loader-spinner";

import todoStore from "../../stores/todoSlice";

import { TodoItem, ITodo } from "../TodoItem/TodoItem.component";

import styles from "./TodoList.module.css";

export const TodoList = observer(() => {
  const todos = todoStore.todos;
  const completed = todos.filter((todo) => todo.completed);
  const active = todos.filter((todo) => !todo.completed);

  const loading = todoStore.loading;
  const filter = todoStore.filter;

  return (
    <ul
      className={styles.container}
      style={todos.length > 0 ? { padding: "20px" } : {}}
    >
      {loading ? (
        <div>
          <TailSpin
            wrapperClass={styles.loading}
            color="#000000"
            width={50}
            height={50}
          />
        </div>
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
});
