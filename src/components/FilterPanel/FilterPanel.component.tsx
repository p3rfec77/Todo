import { observer } from "mobx-react-lite";
import todoStore from "../../stores/todoSlice";

import styles from "./FilterPanel.module.css";

export const FilterPanel = observer(() => {
  return (
    <div className={styles.container}>
      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => todoStore.FilterTodos("all")}
        />
        all
      </label>

      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => todoStore.FilterTodos("active")}
        />
        active
      </label>

      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => todoStore.FilterTodos("completed")}
        />
        completed
      </label>
    </div>
  );
});
