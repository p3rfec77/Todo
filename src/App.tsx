import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import todoStore from "./stores/todoSlice";

import { InputField, TodoList, FilterPanel } from "./components";

import styles from "./App.module.css";

const App = observer(() => {
  const error = todoStore.error;

  useEffect(() => {
    const GetTodos = () => todoStore.fetchTodos();
    GetTodos();
  }, []);

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
});

export default App;
