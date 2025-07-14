import { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";

import "./App.css";
import { counterAtom } from "./store/atoms/counter";

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
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
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
