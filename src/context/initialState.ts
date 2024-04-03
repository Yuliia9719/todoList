import { TodoContextInterface } from '../types/TodoContext.interface.ts'

export const initialState: TodoContextInterface = {
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { },
  deleteAllTodos: () => { },
  clearCompletedTodos: () => { },
  completedTodosCount: 0,
  emptyTodos: true
}