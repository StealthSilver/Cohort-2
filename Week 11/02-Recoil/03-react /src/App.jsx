// Memo : rendering only the parent using memo

import React, { useState, useEffect, memo } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);

  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

// memoizing the Current count function
const CurrentCount = memo(function () {
  return <div>Hi</div>;
});

// memoizing the Increase function
const Increase = memo(function () {
  function increase() {}
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
});

// memoizing the Decrease function
const Decrease = memo(function () {
  function decrease() {}
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
});

export default App;
