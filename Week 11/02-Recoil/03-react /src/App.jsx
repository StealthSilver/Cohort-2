// useMemo

import React, { useState } from "react";
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
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  return <div>Hi</div>;
}

function Increase() {
  function increase() {}
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease() {
  function decrease() {}
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
