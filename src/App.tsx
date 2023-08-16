import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/ReduxHooks";
import { fetchTodos, selectError } from "./store/todoSlice";

import { InputField, TodoList, FilterPanel } from "./components";

import styles from "./App.module.css";

function App() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);

  useEffect(() => {
    const GetTodos = () => dispatch(fetchTodos());
    GetTodos();
  }, [dispatch]);

  return (
    <div className={styles.app}>
      {error ? (
        <div>Кажется что-то пошло нет так... Ошибка: {error}</div>
      ) : (
        <div className={styles.wrapper}>
          <InputField />
          <TodoList />
          <FilterPanel />
        </div>
      )}
    </div>
  );
}

export default App;
