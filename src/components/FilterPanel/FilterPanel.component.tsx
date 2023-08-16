import { useAppDispatch } from "../../hooks/ReduxHooks";

import { FilterTodos } from "../../store/todoSlice";

import styles from "./FilterPanel.module.css";

export const FilterPanel = () => {
  const dispatch = useAppDispatch();

  const filter = (filter: string) => dispatch(FilterTodos(filter));
  return (
    <div>
      <button onClick={() => filter("all")}>All</button>
      <button onClick={() => filter("active")}>Active</button>
      <button onClick={() => filter("completed")}>Completed</button>
    </div>
  );
};
