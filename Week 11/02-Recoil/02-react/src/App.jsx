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
  const counter = atom({
    key: "counter",
    default: 0,
  });
}

export default App;
