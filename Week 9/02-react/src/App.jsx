import { useState, useEffect } from "react";

// Conditional Rendering
function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>{counterVisible && <Counter />} hello</h1>
    </div>
  );
}

// Mounting, Re-rendering, Unmounting
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    console.log("Mounted");

    return () => {
      clearInterval(intervalId);
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
