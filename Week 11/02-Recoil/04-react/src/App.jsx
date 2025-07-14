import "./App.css";
import { counterAtom, evenSelector } from "./store/atoms/counter";
import { useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  return (
    <div>
      <Buttons />
      <Counter />
      <IsEven />
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>Count: {count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App;
