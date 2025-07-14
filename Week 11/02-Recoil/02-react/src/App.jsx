import { useState } from "react";
import { RecoilRoot } from "recoil";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  return <div></div>;
}

function Decrease() {
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button></button>
    </div>
  );
}

function Increase() {
  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button></button>
    </div>
  );
}
export default App;
