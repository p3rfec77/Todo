import React from "react";

import { InputField, TodoList } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <InputField />
      <TodoList />
    </div>
  );
}

export default App;
