import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter />
    </div>
  );
}

// Mounting, Re-rendering, Unmounting
function Counter() {
  const [count, setCount] = useState(0);

  // hooking into the lifecycle events of react
  useEffect(() => {
    // Start interval and store its ID
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    console.log("Mounted");

    // Cleanup function to clear interval when component unmounts
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
