import React from "react";

import { InputField, TodoList, FilterPanel } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <InputField />
      <TodoList />
      <FilterPanel />
    </div>
  );
}

export default App;
