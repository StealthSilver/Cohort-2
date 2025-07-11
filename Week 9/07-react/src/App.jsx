import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount((currentValue) => currentValue + 1);
  }

  // this code will only run on mount and not on every render
  useEffect(() => {
    console.log("above setinterval");
    setInterval(increaseCount, 1000);
  }, []);

  return (
    <div>
      <h1> {count}</h1>
    </div>
  );
}

export default App;
