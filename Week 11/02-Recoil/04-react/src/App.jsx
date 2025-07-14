import { useState } from "react";

import "./App.css";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <div>
      <Buttons />
      <COunter />
      <IsEven />
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}> Decrease</button>
    </div>
  );
}

export default App;
