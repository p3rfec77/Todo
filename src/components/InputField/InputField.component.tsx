import { observer } from "mobx-react-lite";
import todoStore from "../../stores/todoSlice";

import styles from "./InputField.module.css";

export const InputField = observer(() => {
  const addTaskByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      todoStore.addTodo(todoStore.text);
      todoStore.setText("");
    }
  };
  return (
    <>
      <input
        type="text"
        className={styles.todo_field}
        value={todoStore.text}
        placeholder="What needs to be done?"
        onChange={(e) => todoStore.setText(e.target.value)}
        onKeyDown={(e) => addTaskByEnter(e)}
      />
    </>
  );
});
