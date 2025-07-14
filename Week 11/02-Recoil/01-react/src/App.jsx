// this is drilling down the props to achieve the coutner functionality, this will have a lot of re-renders ans is the unoptimal method
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
      {count}
      {/* passing setCount as props */}
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

function Increase({ setCount }) {
  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease({ setCount }) {
  function decrease() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
