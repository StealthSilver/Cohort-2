import { useState } from "react";

import "./App.css";
import { counterAtom, evenSelector } from "./store/atoms/counter";
import { useRecoilValue, useSetRecoilState } from "recoil";

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

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}s</div>;
}

function isEven() {
  const even = useRecoilValue(evenSelector);

  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App;
