import { useState } from "react";

import "./App.css";

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
}

export default App;
