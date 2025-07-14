import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

// subscribing to the counter atom
function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div style={{ fontSize: "2rem", marginBottom: "20px" }}>Count: {count}</div>
  );
}

// subscribing to the setter of the counter atom
function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
