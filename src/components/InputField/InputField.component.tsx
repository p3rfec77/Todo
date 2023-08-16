import { useAppSelector, useAppDispatch } from "../../hooks/ReduxHooks";
import { setText, selectText, addTodo } from "../../store/todoSlice";

import styles from "./InputField.module.css";

export const InputField = () => {
  const text: string = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setText(e.target.value));

  const AddTask = () => {
    dispatch(addTodo(text));
    dispatch(setText(""));
  };

  const addTaskByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTodo(text));
      dispatch(setText(""));
    }
  };
  return (
    <>
      <label>
        <input
          value={text}
          onChange={(e) => InputHandler(e)}
          onKeyDown={(e) => addTaskByEnter(e)}
        />
        <button onClick={AddTask}>Add Todo</button>
      </label>
    </>
  );
};
