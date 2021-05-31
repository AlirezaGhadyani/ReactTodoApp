import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

const App = () => {
  return (
    <div>
      <section>
        <h1 class="todo-title">To Do List</h1>
        <div className="container">
          <TodoInput />
          <TodoList />
        </div>
      </section>
    </div>
  );
};

export default App;
