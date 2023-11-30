import { makeAutoObservable } from "mobx";

import { ITodo } from "../components/TodoItem/TodoItem.component";

class TodoStore {
  todos: ITodo[] = [];
  filter: "all" | "active" | "completed" = "all";
  text: string = "";
  loading: boolean = false;
  error: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string) {
    this.todos.push({
      id: new Date().toISOString(),
      title: title,
      completed: false,
    });
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  toggleTodoCompleted(id: string) {
    const toggledTodo = this.todos.find((todo) => todo.id === id);
    if (!toggledTodo) {
      return;
    }

    toggledTodo.completed = !toggledTodo.completed;
  }

  setText(text: string) {
    this.text = text;
  }

  FilterTodos(filter: "all" | "active" | "completed") {
    this.filter = filter;
  }

  async fetchTodos() {
    this.loading = true;
    this.error = undefined;
    const LIMIT = 5;
    try {
      const respone = await fetch(
        `https://jsonplaceholder.typicode.com/users/1/todos?_limit=${LIMIT}`
      );

      if (!respone.ok) {
        throw new Error();
      }
      const data = await respone.json();
      this.loading = false;
      this.todos = data;
    } catch (error) {
      if (error instanceof Error) {
        this.loading = false;
        this.error = error.name;
      }
    }
  }
}

const todoStore = new TodoStore();
export default todoStore;
