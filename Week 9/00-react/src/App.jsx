import { useState } from "react";

import "./App.css";

function App() {
  // this is the use state hook
  // the array is destructured in the next line
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <button id="btn" onClick={onClickHandler}>
        Counter {count}
      </button>
    </div>
  );
}

export default App;
