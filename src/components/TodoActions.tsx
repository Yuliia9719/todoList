import Button from "./Button.tsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.ts";
import { RiCheckboxCircleLine, RiDeleteBinLine } from "react-icons/ri";
const Actions = () => {
  const { clearCompletedTodos, deleteAllTodos, todos } = useContext(
    TodoContext
  );
  const completedTodosExist = todos.some(todo => todo.completed);

  const emptyTodos = todos.length === 0;
  return (
    <div className="todos__actions">
      <Button
        title="Delete all todos"
        onClick={() => deleteAllTodos()}
        disabled={emptyTodos}
      >
        <RiDeleteBinLine />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={() => clearCompletedTodos()}
        disabled={!completedTodosExist}
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  );
};

export default Actions;
