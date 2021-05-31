import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <section>
        <h1 className="todo-title">To Do List</h1>
        <div className="container">
          <TodoInput getInputText={setInputText} />
          <TodoList />
        </div>
      </section>
    </div>
  );
};

export default App;
