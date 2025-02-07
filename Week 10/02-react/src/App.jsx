import { useRef, useState } from "react";

function App() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      Sign up
      <input ref={inputRef} id="name"></input>
      <input></input>
      <button onClick={focusOnInput}>submit</button>
    </div>
  );
}

export default App;
