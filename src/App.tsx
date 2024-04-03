import Form from "./components/Form.tsx";
import Todos from "./components/Todos.tsx";
import Actions from "./components/TodoActions.tsx";
import TodoProvider from "./components/TodoProvider.tsx";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Actions />
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
