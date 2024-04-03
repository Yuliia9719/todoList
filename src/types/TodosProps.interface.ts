import { TodoItemInterface } from "./TodoItem.interface.ts";
export interface TodosPropsInterface {
  todos: TodoItemInterface[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

