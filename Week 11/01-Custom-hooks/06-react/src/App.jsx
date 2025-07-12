import { useState } from "react";
import { usePrev } from "./hooks/usePrev";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  const prev = usePrev(state);

  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click me
      </button>

      <p>the previous value was {prev}</p>
    </>
  );
}

export default App;
