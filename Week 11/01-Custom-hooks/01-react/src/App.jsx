// useCounter hook

import { useState } from "react";

import "./App.css";

// custom hook

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }
}

function App() {
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  );
}

export default App;
