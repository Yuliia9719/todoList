import { TodoContext } from "../context/TodoContext.ts";
import { TodoProviderPropsInterface } from "../types/TodoProviderProps.interface.ts";
import { TodoItemInterface } from "../types/TodoItem.interface.ts";
import { MOCK_TODOS } from "../data/mock-todos.ts";
import { useState } from "react";

const TodoProvider = ({ children }: TodoProviderPropsInterface) => {
  const [todos, setTodos] = useState<TodoItemInterface[]>(MOCK_TODOS);
  const addTodo = (todo: TodoItemInterface) => {
    if (!todo.title.trim()) {
      return;
    }
    setTodos([...todos, todo]);
  };
  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedTodosCount = todos.filter(todo => todo.completed).length;

  const emptyTodos = todos.length === 0;

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        deleteAllTodos,
        clearCompletedTodos,
        completedTodosCount,
        emptyTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
