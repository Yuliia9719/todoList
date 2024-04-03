import { TodoItemInterface } from "./TodoItem.interface.ts";

export interface TodoContextInterface {
  todos: TodoItemInterface[];
  addTodo: (todo: TodoItemInterface) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  deleteAllTodos: () => void;
  clearCompletedTodos: () => void;
  completedTodosCount: number,
  emptyTodos: boolean
}