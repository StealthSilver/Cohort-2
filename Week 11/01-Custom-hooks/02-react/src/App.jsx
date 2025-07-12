// useCounter hook

import { useState } from "react";

import "./App.css";

// custom hook

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  return (
    <div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  );
}

export default App;
