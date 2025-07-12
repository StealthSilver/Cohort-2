import { useState, useRef, useCallback } from "react";

function useDebounce(originalFn, delay = 200) {
  const timeoutRef = useRef(null);

  const debouncedFn = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      originalFn();
    }, delay);
  }, [originalFn, delay]);

  return debouncedFn;
}

function App() {
  function sendDataToBackend() {
    fetch("https://api.amazon.com/search/");
    console.log("API called");
  }

  const debouncedFn = useDebounce(sendDataToBackend, 200);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
}

export default App;
