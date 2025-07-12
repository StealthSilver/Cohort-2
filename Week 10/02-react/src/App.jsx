// use ref -> first use case:  focusing on the input element

import { useRef, useState } from "react";

function App() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      Sign up
      <input ref={inputRef}></input>
      <input></input>
      <button onClick={focusOnInput}>submit</button>
    </div>
  );
}

export default App;
