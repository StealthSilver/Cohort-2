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

    setTodos(newArray);
  }

  return (
    <div>
      <input type="text" placeholder="title" />
      <br />
      <input type="text" placeholder="description" />
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      {JSON.stringify(todos)}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
      <h2>{props.done}</h2>
    </div>
  );
}

export default App;
