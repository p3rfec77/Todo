import { useAppDispatch } from "../../hooks/ReduxHooks";

import { FilterTodos } from "../../store/todoSlice";

import styles from "./FilterPanel.module.css";

export const FilterPanel = () => {
  const dispatch = useAppDispatch();

  const filter = (filter: string) => dispatch(FilterTodos(filter));
  return (
    <div className={styles.container}>
      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => filter("all")}
        />
        all
      </label>

      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => filter("active")}
        />
        active
      </label>

      <label className={styles.button}>
        <input
          type="radio"
          name="filter"
          className={styles.radio}
          onClick={() => filter("completed")}
        />
        completed
      </label>
    </div>
  );
};
