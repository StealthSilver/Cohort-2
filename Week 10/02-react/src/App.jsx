import { useRef, useState } from "react";

function App() {
  const ref = useRef();
  return (
    <div>
      Sign up
      <input id="name"></input>
      <input></input>
      <button onClick={focusOnInput}>submit</button>
    </div>
  );
}

export default App;
