import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount() {
    setCount((currentValue) => currentValue + 1);
  }

  function decreaseCount() {
    setCount2((currentValue) => currentValue - 1);
  }

  // ✅ This effect runs on mount and clears intervals on unmount
  useEffect(() => {
    const increaseInterval = setInterval(increaseCount, 3000);
    const decreaseInterval = setInterval(decreaseCount, 4000);

    return () => {
      clearInterval(increaseInterval);
      clearInterval(decreaseInterval);
      console.log("Intervals cleared on unmount.");
    };
  }, []); 
  // Runs only on mount and unmount (because the dependency array is empty)

  // ✅ This effect runs whenever `count` or `count2` changes
  useEffect(() => {
    console.log("The count has been updated to " + count);
  }, [count, count2]);

  return (
    <div>
      <h1>Count 1: {count}</h1>
      <h1>Count 2: {count2}</h1>
    </div>
  );
}

export default App;
