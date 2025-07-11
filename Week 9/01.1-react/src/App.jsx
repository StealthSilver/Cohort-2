import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Cleanup to avoid multiple intervals
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}

export default App;
