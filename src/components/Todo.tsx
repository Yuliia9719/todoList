import { RiDeleteBinLine, RiTodoFill } from "react-icons/ri";
import { TodoPropsInterface } from "../types/TodoProps.interface.ts";
import { FaCheckSquare } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.ts";
const Todo = ({ todo: { id, title, completed } }: TodoPropsInterface) => {
  const { removeTodo, toggleTodo } = useContext(TodoContext);
  return (
    <div className={`todo${completed ? " todo--completed" : ""}`}>
      <RiTodoFill className="todo__icon" />
      <div className="todo__id">
        {id}
      </div>
      <h2 className="todo__title">
        {title}
      </h2>
      <div className="todo__completed">
        {completed.toString()}
      </div>
      <RiDeleteBinLine
        className="todo__delete-btn"
        onClick={() => removeTodo(id)}
      />
      <FaCheckSquare
        className="todo__check-btn"
        onClick={() => toggleTodo(id)}
      />
    </div>
  );
};

export default Todo;
