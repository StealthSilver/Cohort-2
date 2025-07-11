// creating a counter in react

import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  console.log("counter");

  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // dependency array

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}
