import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "regularly",
      done: false,
    },
  ]);

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }

    newArray.push({
      title: "eat food",
      description: "properly",
      done: true,
    });
  }

  return <div></div>;
}

export default App;
